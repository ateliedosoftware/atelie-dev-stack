const ldapjs = require('ldapjs');
require('dotenv').config()
const AppError = require('../../shared/errors/AppError')

const { bindLDAP } = require('../../lib/ldapjs/BindLDAP');


class CreateClientConnection {
    constructor() {
        this.user = process.env.USERROOT;
        this.password = process.env.PASSWORD;
        this.url = process.env.URL

        this.ldapConfig = {
            url: this.url,
        }
    
        const ldapOptions = {
            url: this.ldapConfig.url,
            reconnect: true
        };
    
        this.ldapClient = ldapjs.createClient(ldapOptions);

        this.ldapClient.on('error', (err) => {
            if (err) {
                console.log(`Error in ldapClient: ${err}`);
            }
        });

        const auth = bindLDAP(this.user, this.password, this.ldapClient)
        if (!auth) {
            throw new AppError(500, `Fail in bind!`)
        }

        return { ldapjs: ldapjs, ldapClient: this.ldapClient}

    }

}

module.exports = new CreateClientConnection;