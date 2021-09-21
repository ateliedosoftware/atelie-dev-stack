const createGroupService = require('./CreateGroupService');

class CreateGroupController {

    constructor() {}

    async handle(request, response) {

        const { name } = request.body;

        const newGroup = await createGroupService.execute(name);

        return response.status(201).send({
            message: `The group ${newGroup.name} has been created!`,
            data: newGroup
        });

    }
}

module.exports = new CreateGroupController;