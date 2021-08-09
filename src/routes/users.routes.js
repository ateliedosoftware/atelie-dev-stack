const express = require('express');
const usersRoutes = express.Router(); 

const createUserController = require("../app/modules/users/services/CreateUser/CreateUserController");
const searchUserController = require("../app/modules/users/services/SearchUser/SearchUserController");
const authenticateUserController = require("../app/modules/users/services/AuthenticateUser/AuthenticateUserController");
const isUserMemberOfController = require("../app/modules/users/services/IsUserMemberOf/IsUserMemberOfController");
const updateUserController = require("../app/modules/users/services/UpdateUser/UpdateUserController");
const updateUserPasswordController = require("../app/modules/users/services/UpdateUserPassword/UpdateUserPasswordController");
const enableUserController = require("../app/modules/users/services/EnableUser/EnableUserController");
const disableUserController = require("../app/modules/users/services/DisableUser/DisableUserController");


usersRoutes.post("/create", createUserController.handle);
usersRoutes.get("/:user", searchUserController.handle);
usersRoutes.post("/authenticate", authenticateUserController.handle);
usersRoutes.put("/:user/member-of/:group", isUserMemberOfController.handle);
usersRoutes.put("/:user", updateUserController.handle);
usersRoutes.put("/:user/password", updateUserPasswordController.handle);
usersRoutes.put("/:user/enable", enableUserController.handle);
usersRoutes.put("/:user/disable", disableUserController.handle);



////////////////////////////////////////////
// TO DO
// DELETE /:user


module.exports = usersRoutes