const express = require('express');
const groupsRoutes = express.Router();

const listGroupsController = require("../app/modules/groups/services/ListGroups/ListGroupsController");
const createGroupController = require("../app/modules/groups/services/CreateGroup/CreateGroupController");
const searchGroupController = require("../app/modules/groups/services/SearchGroup/SearchGroupController");
const addUserToGroupController = require("../app/modules/groups/services/AddUserToGroup/AddUserToGroupController");

groupsRoutes.get("/", listGroupsController.handle);
groupsRoutes.post("/create", createGroupController.handle);
groupsRoutes.get("/:group", searchGroupController.handle);
groupsRoutes.post("/:group/user/:user", addUserToGroupController.handle);



module.exports = groupsRoutes