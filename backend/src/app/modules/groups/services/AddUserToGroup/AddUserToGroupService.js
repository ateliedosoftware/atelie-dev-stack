const AppError = require('../../../../../shared/errors/AppError')
const groupsRepository = require('../../repositories/GroupsRepository')
const usersRepository = require('../../../users/repositories/UsersRepository');


class CreateGroupService {

    constructor() { }

    async execute(group, user) {

        group = group.toUpperCase();

        const isUserMemberOf  = await usersRepository.isUserMemberOf(user, group)

        if (isUserMemberOf) {
            throw new AppError(404, `The user ${user} is already a member of ${group} group`);
        };

        const foundUser = await usersRepository.searchByUser(user)

        if (!foundUser) {
            throw new AppError(404, `The user ${user} does not exists!`);
        };

        const foundGroup = await groupsRepository.searchByGroup(group)
        
        if (!foundGroup) {
            throw new AppError(404, `The group ${group} does not exists!`);
        };

        const addUserToGroup = await groupsRepository.addUserToGroup(foundGroup.dn, foundUser.dn)

        if (!addUserToGroup) {
            throw new AppError(500, `The user ${user} cannot be add to a ${group} group!`);
        };

        return addUserToGroup
    }
}

module.exports = new CreateGroupService;
