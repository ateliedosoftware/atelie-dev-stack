const connection = require('../../app/config/CreateClientConnection');
require('dotenv').config()

const {ldapClient, ldapjs } = connection;

const adSuffix = process.env.ADSUFFIX;
const ouGroups = process.env.OU_GROUPS;

const url =  process.env.URL
const ldapConfig = {
    url: url,
}
const ldapOptions = {
    url: ldapConfig.url,
};

module.exports = {

    async authenticateUserFunction(user, password) {

        const ldapClientAuth = ldapjs.createClient(ldapOptions);

        const result = await new Promise((resolve, reject) => {

            ldapClientAuth.bind(user, password, function (err) {
                if (err) {
                    ldapClientAuth.unbind();
                    reject(err)
                } else {
                    ldapClientAuth.unbind();
                    resolve()
                }

            })
        }).then(data => { return true }).catch(() => { return false });

        return result
    },

    async searchUserFunction(user) {

        const opts = {
            filter: `(&(|(objectclass=person)(objectclass=user))(|(postalcode=${user})(postofficebox=${user})(uid=${user})(samaccountname=${user})(mail=${user})))`,
            scope: 'sub',
            attributes: [
                'givenName',
                'sn',
                'cn',
                'displayName',
                'sAMAccountName',
                'mail',
                'userPrincipalName',
                'userAccountControl',
                'postalCode',
                'objectClass',
                'msSFU30Name',
                'msSFU30NisDomain',
                'uid',
                'postOfficeBox',
                'uidNumber',
                'gidNumber',
                'loginShell',
                'pwdLastSet',
                'unixHomeDirectory',
            ],
        };

        const result = await new Promise((resolve, reject) => {

            let users = [];

            ldapClient.search(adSuffix, opts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    res.on('searchEntry', async function (entry) {
                        users.push(entry.object)
                    });
                    res.on('end', async function () {
                        if (users.length < 1) {
                            reject()
                        } else {
                            resolve(...users);
                        }
                    })
                }
            });
        }).then(data => { return data }).catch(() => { return false })

        return result
    },

    async isUserMemberOfFunction(user, group) {

        const opts = {
            filter: `(&(|(objectclass=person)(objectclass=user))(&(|(samaccountname=${user})(uid=${user})(mail=${user})(postalcode=${user})(postofficebox=${user}))(memberOf=cn=${group},${ouGroups},${adSuffix})))`,
            scope: 'sub',
            attributes: [
                'cn',
                'sAMAccountName',
                'mail',
                'uid',
                'memberOf'
            ],
        };

        const result = await new Promise((resolve, reject) => {

            let users = [];

            ldapClient.search(adSuffix, opts, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    res.on('searchEntry', async function (entry) {
                        users.push(entry.object)
                    });
                    res.on('end', async function () {
                        if (users.length < 1) {
                            reject()
                        } else {
                            resolve(...users);
                        }
                    })
                }
            });
        }).then(data => { return data }).catch((err) => { return false })

        return result
    },

    async createUserFunction(newDN, newUser_data) {

        const result = await new Promise((resolve, reject) => {

            ldapClient.add(newDN, newUser_data, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        }).then(data => { return true }).catch(err => { return false })
    
        return result
    },

    async updateUserFunction(newDN, newUser_unixAttributes) {

        for (var [key, value] of Object.entries(newUser_unixAttributes)) {
    
            var change = "";
            if (key == "password") {
                const newPassword = encodeNewPassword(value)
                change = new ldapjs.Change({
                    operation: 'replace',
                    modification: {
                        unicodePwd: newPassword
                    }
                });
            } else {
                change = new ldapjs.Change({
                    operation: 'replace',
                    modification: {
                        [key]: value
                    }
                });
            }
    
            const result = await new Promise((resolve, reject) => {

                ldapClient.modify(newDN, change, function (err) {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve()
                    }
                });
            }).then(data => { return true }).catch(err => { return false })
            
            if (!result) {
                return false
            } 
        }
    
        return true
    }
}

function encodeNewPassword(password) {
    var pwd = Buffer.from('"' + password + '"', 'utf16le').toString();
    return pwd;
}