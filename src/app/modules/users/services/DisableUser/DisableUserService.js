const AppError = require('../../../../../shared/errors/AppError');
const usersRepository = require('../../repositories/UsersRepository')

class DisableUserService {

    constructor() { }

    async execute(user) {

        const foundUser = await usersRepository.searchByUser(user)
        
        if (!foundUser) {
            throw new AppError(404, `The user ${user} does not exists!`);
        };

        const userAccountControl = 514

        const disableUser = await usersRepository.disable(foundUser.dn, { userAccountControl }); 

        if (!disableUser) {
            throw new AppError(404, `The user ${user} cannot be disable!`);
        };

        return disableUser
    }
}

module.exports = new DisableUserService;
