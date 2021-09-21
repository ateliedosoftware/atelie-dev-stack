const updateUserService = require('./UpdateUserService');

class UpdateUserController {

    constructor() {}

    async handle(request, response) {

        const { user } = request.params;
        const updateUser_data = request.body

        const updateUser = await updateUserService.execute(user, updateUser_data);

        return response.status(200).send({
            message: `The user ${user} has been updated!`,
        });

    }
}

module.exports = new UpdateUserController;