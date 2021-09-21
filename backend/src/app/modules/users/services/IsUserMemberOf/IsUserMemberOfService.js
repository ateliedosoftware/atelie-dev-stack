const AppError = require('../../../../../shared/errors/AppError');
const usersRepository = require('../../repositories/UsersRepository')

class IsUserMemberOfService {

    constructor() {}

    async execute(user, group) {

        const isUserMemberOf  = await usersRepository.isUserMemberOf(user, group)

        if (!isUserMemberOf) {
            throw new AppError(204, `The user ${user} is not a member of ${group} group`);
        };
      
        return isUserMemberOf
    }
}

module.exports = new IsUserMemberOfService;
