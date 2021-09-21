const AppError = require('../../../../../shared/errors/AppError');
const usersRepository = require('../../repositories/UsersRepository')

class CreateGroupService {

    constructor() { }

    async execute(user, password) {

        const foundUser = await usersRepository.searchByUser(user)

        if (!foundUser) {
            throw new AppError(404, `The user ${user} does not exists!`);
        };

        const updateUserPassword = await usersRepository.updatePassword(foundUser.dn, {password}); 

        if (!updateUserPassword) {
            throw new AppError(500, `The password cannot be updated!`);
        };

        return updateUserPassword
    }
}

module.exports = new CreateGroupService;
