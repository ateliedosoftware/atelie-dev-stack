require('dotenv').config();

const createUserService = require('./CreateUserService');

class CreateUserController {

    constructor() {}

    async handle(request, response) {

        const { fullname, matricula, cpf, mail, ou } = request.body;

        const newUser = await createUserService.execute(fullname, matricula, cpf, mail, ou);

        return response.status(201).send({
            message: `The user ${newUser.cn} has been created!`,
            data: newUser
        });

    }
}

module.exports = new CreateUserController;