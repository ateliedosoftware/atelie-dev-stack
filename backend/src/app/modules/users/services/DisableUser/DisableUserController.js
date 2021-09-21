const disableUserService = require('./DisableUserService');

class DisableUserController {

    constructor() {}

    async handle(request, response) {

        const { user } = request.params;

        const disableUser = await disableUserService.execute(user);

        return response.status(200).send({
            message: {
                disable: true
            }
        });

    }
}

module.exports = new DisableUserController;