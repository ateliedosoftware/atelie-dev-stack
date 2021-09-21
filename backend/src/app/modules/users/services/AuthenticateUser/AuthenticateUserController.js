const authenticateUserService = require('./AuthenticateUserService')

class AuthenticateUserController {

    constructor() {}

    async handle(request, response) {

        const { user, password } = request.body

        const auth = await authenticateUserService.execute(user, password)

        return response.status(200).send({
            message: `Authentication succeeded!`
        });

    }
}

module.exports = new AuthenticateUserController;
