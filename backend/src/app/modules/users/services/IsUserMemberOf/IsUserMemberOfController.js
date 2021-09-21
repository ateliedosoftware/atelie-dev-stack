const isUserMemberOfService = require('./IsUserMemberOfService')

class IsUserMemberOfController {

    constructor() {}

    async handle(request, response) {

        let { user, group } = request.params;

        const isUserMemberOf = await isUserMemberOfService.execute(user, group)

        return response.status(200).send({
            message: {
                isUserMemberOf: true
            }
        });

    }
}

module.exports = new IsUserMemberOfController;
