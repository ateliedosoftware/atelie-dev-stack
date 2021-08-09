const connection = require('../../app/config/CreateClientConnection');
require('dotenv').config()

const {ldapClient, ldapjs } = connection;


const ypServer = process.env.YP_SERVER;

module.exports = {

    async getMsSFU30MaxUidNumber() {

        const ypserver = ypServer

        const opts = {
            filter: '(objectClass=msSFU30DomainInfo)',
            scope: 'sub',
            attributes: ['msSFU30MaxUidNumber']
        };

        const result = await new Promise((resolve, reject) => {

        console.log('entrou na promise')

            ldapClient.search(ypserver, opts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    res.on('searchEntry', async function (entry) {
                        const data = entry.object
                        resolve(data);
                    });
                }
            });
        }).then(data => { return data }).catch(err => { return false })

        return result
    },

    async updateMsSFU30MaxUidNumber(new_msSFU30MaxUidNumber) {

        const ypserver = ypServer

            var change = new ldapjs.Change({
                operation: 'replace', 
                modification: {
                    msSFU30MaxUidNumber: new_msSFU30MaxUidNumber
                }
            });
    
        const result = await new Promise((resolve, reject) => {

            ldapClient.modify(ypserver, change, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            });
        }).then(data => { return true }).catch(err => { return false })
        
        return result
    }
    
}