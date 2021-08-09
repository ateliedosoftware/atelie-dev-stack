const jwt = require('jsonwebtoken')
const authConfig = require('../../../../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: "360d", // colocar como anual
    });
}

class GenerateTokenToUserController {

    constructor() {}

    async handle(request, response) {

        try {

            const { user, group } = request

            return response.send({
                user,
                group,
                token: generateToken({ id: user}),
                success: `Authentication succeeded with user ${user}` ,        
            });

        } catch (error) {
            throw new AppError(400, `Try again!`);
        }

    }
}

module.exports = new GenerateTokenToUserController;
