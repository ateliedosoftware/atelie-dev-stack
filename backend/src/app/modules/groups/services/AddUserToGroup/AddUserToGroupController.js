const addUserToGroupService = require('./AddUserToGroupService');

class AddUserToGroupController {

    constructor() {}

    async handle(request, response) {

        const { group, user } = request.params;

        const addUser = await addUserToGroupService.execute(group, user);

        return response.status(201).send({
            message: `The user ${group} has been add to ${group} group!`,
            userAddToGroup: addUser
        });

    }
}

module.exports = new AddUserToGroupController;