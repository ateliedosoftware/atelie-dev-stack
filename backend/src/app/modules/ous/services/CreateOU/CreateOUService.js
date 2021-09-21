require('dotenv').config()
const AppError = require('../../../../../shared/errors/AppError')
const ousRepository = require('../../repositories/OUsRepository')

const adSuffix = process.env.ADSUFFIX;

class CreateGroupService {

    constructor() {}

    async execute(ou) {

        const full_ou = ou.concat(`,${adSuffix}`).toUpperCase();
        const arrayOuData = full_ou.split(",")
        const ouCN = arrayOuData[0].split("=")

        const newOU_data = {
            name: ouCN[1],
            ou: ouCN[1],
            objectClass: ['top', 'organizationalUnit']
        }

        const ouAlreadyExists = await ousRepository.searchByOU(newOU_data.name)
        
        if (ouAlreadyExists) {
            throw new AppError(404, `The organizationl unit ${ou} already exists!`);
        };

        const newOU = await ousRepository.create(full_ou, newOU_data)

        if (!newOU) {
            throw new AppError(500, `The organizationl unit ${ou} cannot be created!`);
        };

        return newOU_data
    }
}

module.exports = new CreateGroupService;
