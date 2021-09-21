require('dotenv').config();

const searchGroupService = require('./SearchGroupService');

class SearchGroupController {

    constructor() {}

    async handle(request, response) {

        const { group } = request.params;

        const foundGroup = await searchGroupService.execute(group);

        return response.status(200).send(foundGroup);

    }
}

module.exports = new SearchGroupController;