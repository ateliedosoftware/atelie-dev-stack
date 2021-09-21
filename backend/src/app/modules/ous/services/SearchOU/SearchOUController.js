const searchOUService = require('./SearchOUService');

class SearchOUController {

    constructor() {}

    async handle(request, response) {

        const { ou } = request.body;

        const foundOU = await searchOUService.execute(ou);

        return response.status(200).send(foundOU);

    }
}

module.exports = new SearchOUController;