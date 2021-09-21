const AppError = require('../../../../../shared/errors/AppError')
const usersRepository = require('../../repositories/UsersRepository')

class SearchUserService {

    constructor() {}

    async execute(user) {

        const foundUser = await usersRepository.searchByUser(user)
        
        if (!foundUser) {
            throw new AppError(404, `The user ${user} does not exists!`);
        };

        return foundUser
    }
}

module.exports = new SearchUserService;
