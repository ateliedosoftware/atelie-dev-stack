require('dotenv').config()
const AppError = require('../../../../../shared/errors/AppError')
const groupsRepository = require('../../repositories/GroupsRepository')

class SearchGroupService {

    constructor() {}

    async execute(group) {

        const foundGroup = await groupsRepository.searchByGroup(group)
        
        if (!foundGroup) {
            throw new AppError(404, `The group ${group} does not exists!`);
        };

        return foundGroup
    }
}

module.exports = new SearchGroupService;
