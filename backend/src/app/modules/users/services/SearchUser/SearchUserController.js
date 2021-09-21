const searchUserService = require('./SearchUserService')

class SearchUserController {

    constructor() {}

    async handle(request, response) {

        let { user } = request.params;

        const foundUser = await searchUserService.execute(user)

        return response.status(200).send(foundUser);

    }
}

module.exports = new SearchUserController;
