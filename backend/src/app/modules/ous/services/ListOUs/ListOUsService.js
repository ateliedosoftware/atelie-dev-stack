const AppError = require('../../../../../shared/errors/AppError')
const ousRepository = require('../../repositories/OUsRepository')

class ListOUsService {

    constructor() {}

    async execute() {

        const listOUs = await ousRepository.list(`*`)
        
        if (!listOUs) {
            throw new AppError(500, `The OUs cannot be listed`);

        };

        return listOUs
    }
}

module.exports = new ListOUsService;
