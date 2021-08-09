const listOUsService = require('./ListOUsService');

class ListOUsController {

    constructor() {}

    async handle(request, response) {

        const listOUs = await listOUsService.execute();

        return response.status(200).send(listOUs);

    }
}

module.exports = new ListOUsController;