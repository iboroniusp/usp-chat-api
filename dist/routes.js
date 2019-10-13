const express = require("express");

const routes = express.Router(); // Importamos todas as controllers
// Controllers

const userController = require("./controllers/userController");

const messageController = require("./controllers/messageController");

const roomController = require("./controllers/roomController"); // Definimos as rotas de usuários
// Rotas de usuário


routes.post("/users/", userController.store);
routes.get("/users/", userController.index); // Rotas de mensagens

routes.post("/messages", messageController.store); // Rotas de salas

routes.post("/rooms", roomController.store);
routes.get("/rooms", roomController.index);
routes.get("/rooms/:room_id", roomController.show);
module.exports = routes;