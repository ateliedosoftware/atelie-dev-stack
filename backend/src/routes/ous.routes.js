const express = require('express');
const ousRoutes = express.Router();

const createOUController = require("../app/modules/ous/services/CreateOU/CreateOUController");
const searchOUController = require("../app/modules/ous/services/SearchOU/SearchOUController");
const listOUsController = require("../app/modules/ous/services/ListOUs/ListOUsController");

ousRoutes.post("/create", createOUController.handle);
ousRoutes.post("/search", searchOUController.handle);
ousRoutes.get("/", listOUsController.handle);


module.exports = ousRoutes