require('dotenv').config()

module.exports = {

    async bindLDAP(user, password, ldapClient) {

        const result = await new Promise((resolve, reject) => {

            ldapClient.bind(user, password, function (err) {
                if (err) {
                    console.log({ message: `bind FAILED!`});
                    console.log(err)
                    reject(err)
                } else {
                    console.log({ message: `bind OK!`});
                    resolve()
                }
            })
        }).then(data => { return true }).catch(() => { return false })
    
        return { result, ldapClient }
    }
    
}