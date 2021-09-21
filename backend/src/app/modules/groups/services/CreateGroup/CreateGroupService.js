require('dotenv').config()
const AppError = require('../../../../../shared/errors/AppError')
const groupsRepository = require('../../repositories/GroupsRepository')

const adSuffix = process.env.ADSUFFIX;
const ouGroups = process.env.OU_GROUPS;

class CreateGroupService {

    constructor() {}

    async execute(name) {

       const group = name.toUpperCase();

       const newGroup_dn = `CN=${group}`.concat(`,${ouGroups}`).concat(`,${adSuffix}`)

        const newGroup_data = {
            name: group,
            cn: group,
            displayName: group,
            sAMAccountName: group,
            description: group,
            objectClass: ['top', 'group']
        };

        const groupAlreadyExists = await groupsRepository.searchByGroup(group)
        
        if (groupAlreadyExists) {
            throw new AppError(404, `The group ${group} already exists!`);
        };

        const newGroup = await groupsRepository.create(newGroup_dn, newGroup_data)

        if (!newGroup) {
            throw new AppError(500, `The group ${group} cannot be created!`);
        };

        return newGroup_data
    }
}

module.exports = new CreateGroupService;
