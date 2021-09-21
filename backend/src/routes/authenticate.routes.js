const express = require('express');
const authenticateRoutes = express.Router();

const generateTokenToUserController = require("../app/modules/users/services/GenerateTokenToUser/GenerateTokenToUserController");

const { ensureAdmin } = require('../app/middlewares/ensureAdmin')

authenticateRoutes.post("/login", ensureAdmin, generateTokenToUserController.handle);


module.exports = authenticateRoutes