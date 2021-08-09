const createOUService = require('./CreateOUService');

class CreateOUController {

    constructor() {}

    async handle(request, response) {

        const { ou } = request.body;

        const newOU = await createOUService.execute(ou);

        return response.status(201).send({
            message: `The organizational unit ${newOU.name} has been created!`,
            data: newOU
        });

    }
}

module.exports = new CreateOUController;