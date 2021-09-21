require('dotenv').config();
const AppError = require('../../shared/errors/AppError');
const usersRepository = require('../modules/users/repositories/UsersRepository');

const groupAdmins = process.env.GROUP_ADMINS;
const domain = process.env.DOMAIN;

module.exports = {

    async ensureAdmin(req, res, next) {

            const { user, password } = req.body;

            const group = `${groupAdmins}`;

            const foundUser = await usersRepository.searchByUser(user)
          
            if (!foundUser) {
                throw new AppError(401, `User or password incorrect!`);
            };
    
            const sAMAccountName = foundUser.sAMAccountName.concat(`${domain}`) 

            const auth = await usersRepository.authenticateUser(sAMAccountName, password);
          
            if (!auth) {
                throw new AppError(401, `User or password incorrect!`)
            }

            const isUserMemberOf = await usersRepository.isUserMemberOf(user, group)

            if (!isUserMemberOf) {
                throw new AppError(404, `The user does not have permission to access this application!`);
            };
      
            req.user = user 
            req.group = group

            next()

    }
}