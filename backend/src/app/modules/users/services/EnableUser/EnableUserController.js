const enableUserService = require('./EnableUserService');

class EnableUserController {

    constructor() {}

    async handle(request, response) {

        const { user } = request.params;

        const enableUser = await enableUserService.execute(user);

        return response.status(200).send({
            message: {
                enable: enableUser
            }
        });

    }
}

module.exports = new EnableUserController;