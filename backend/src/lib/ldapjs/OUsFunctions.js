const connection = require('../../app/config/CreateClientConnection');
require('dotenv').config()

const {ldapClient, ldapjs } = connection;

const adSuffix = process.env.ADSUFFIX;

module.exports = {

    async searchOUFunction(ou) {

        const opts = {
            filter: `(&(objectClass=organizationalUnit)(ou=${ou}))`,
            scope: 'sub',
        };

        const result = await new Promise((resolve, reject) => {

            let ous = [];

            ldapClient.search(adSuffix, opts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    res.on('searchEntry', async function (entry) {
                        ous.push(entry.object)
                    });
                    res.on('end', async function () {
                        if (ous.length < 1) {
                            reject()
                        } else {
                            // resolve(...ous);
                            resolve(ous);
                        }
                    })
                }
            });
        }).then(data => { return data }).catch(() => { return false })

        return result
    },

    async createOUFunction(newDN, newOU) {

        const result = await new Promise((resolve, reject) => {

            ldapClient.add(newDN, newOU, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }).then(data => { return true }).catch(() => { return false })

        return result
    }
}
