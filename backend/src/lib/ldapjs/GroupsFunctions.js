const connection = require('../../app/config/CreateClientConnection');
require('dotenv').config()

const {ldapClient, ldapjs } = connection;

const adSuffix = process.env.ADSUFFIX;

module.exports = {

    async searchGroupFunction(group) {

        const opts = {
            filter: `(&(objectCategory=group)(|(cn=${group})(name=${group})(sAMAccountName=${group})))`,
            scope: 'sub',
            attributes: [
                'cn',
                'dn',
                'name',
                'dn',
                'member'
            ]
        };

        const result = await new Promise((resolve, reject) => {

            let groups = [];

            ldapClient.search(adSuffix, opts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    res.on('searchEntry', async function (entry) {
                        groups.push(entry.object)
                    });
                    res.on('end', async function () {
                        if (groups.length < 1) {
                            reject()
                        } else {
                            resolve(groups);
                        }
                    })
                }
            });
        }).then(data => { return data }).catch(() => { return false })

        return result
    },

    async createGroupFunction(newDN, newGroup) {

        const result = await new Promise((resolve, reject) => {

            ldapClient.add(newDN, newGroup, function (err) {
                if (err) {
                    console.log("ERRO: Criação do grupo: " + err);
                    reject(err)
                } else {
                    console.log("SUCESSO: Grupo criado");
                    resolve()
                }
            })
        }).then((data) => { return true }).catch(() => { return false })

        return result
    },

    async addUserToGroupFunction(group, user) {

        const change = new ldapjs.Change({
            operation: 'add',
            modification: {
                member: user
            }
        });

        const result = await new Promise((resolve, reject) => {

            ldapClient.modify(group, change, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }).then(data => { return true }).catch((err) => { return false })

        return result
    }
}