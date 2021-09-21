const AppError = require('../../../../../shared/errors/AppError')
const groupsRepository = require('../../repositories/GroupsRepository')

class ListGroupsService {

    constructor() {}

    async execute() {

        const foundGroup = await groupsRepository.list(`*`)
        
        if (!foundGroup) {
            throw new AppError(500, `The groups cannot be listed`);
        };

        return foundGroup
    }
}

module.exports = new ListGroupsService;
