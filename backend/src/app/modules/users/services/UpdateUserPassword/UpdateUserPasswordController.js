const updateUserPasswordService = require('./UpdateUserPasswordService');

class UpdateUserPasswordController {

    constructor() {}

    async handle(request, response) {

        const { user } = request.params;
        const { password } = request.body

        const updateUserPasword = await updateUserPasswordService.execute(user, password);

        return response.status(200).send({
            message: `The password has been updated!`,
        });

    }
}

module.exports = new UpdateUserPasswordController;