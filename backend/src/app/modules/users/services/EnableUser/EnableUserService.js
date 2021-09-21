const AppError = require('../../../../../shared/errors/AppError');
const usersRepository = require('../../repositories/UsersRepository')

class EnableUserService {

    constructor() { }

    async execute(user) {

        const foundUser = await usersRepository.searchByUser(user)
        
        if (!foundUser) {
            throw new AppError(404, `The user ${user} does not exists!`);
        };

        const userAccountControl = 512

        const enableUser = await usersRepository.enable(foundUser.dn, { userAccountControl }); 

        if (!enableUser) {
            throw new AppError(500, `The user ${user} cannot be enable!`);
        };

        return enableUser
    }
}

module.exports = new EnableUserService;
