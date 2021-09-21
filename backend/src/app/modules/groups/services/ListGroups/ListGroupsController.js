const listGroupsService = require('./ListGroupsService');

class ListGroupsController {

    constructor() {}

    async handle(request, response) {

        const listGroups = await listGroupsService.execute();

        return response.status(200).send(listGroups);

    }
}

module.exports = new ListGroupsController;