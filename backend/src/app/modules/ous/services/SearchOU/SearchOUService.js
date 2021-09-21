const { getAttributeName } = require('../../../../../lib/utils')
const AppError = require('../../../../../shared/errors/AppError')
const ousRepository = require('../../repositories/OUsRepository')

class SearchOUService {

    constructor() {}

    async execute(ou) {

        const ouAttributeName = getAttributeName(ou)
       
        const foundOU = await ousRepository.searchByOU(ouAttributeName)
        
        if (!foundOU) {
            throw new AppError(404, `The OU ${ou} does not exists!`);
        };

        return foundOU
    }
}

module.exports = new SearchOUService;
