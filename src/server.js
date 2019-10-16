// const - Constante
// var/let - Variaveis comuns auto tipadas

const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
port = process.env.PORT || 3005;

var app = require("express")();
var http = require("http").createServer(app); //define o protocolo http
var io = require("socket.io")(http); //define o protocolo wss/websocket
var dbUrl = "";

io.on("connection", socket => {
  console.log("Socket conectado: " & socket.id);
});

app.use(function(req, res, next) {
  req.io = io;
  next();
});

app.use(express.json());
app.use(cors());

if (process.env === "development") {
  dbUrl =
    "mongodb+srv://admin:admin@cluster0-rlodt.mongodb.net/test?retryWrites=true&w=majority";
  //"mongodb://localhost:27017/usp-chat";
} else {
  dbUrl =
    "mongodb+srv://admin:admin@cluster0-rlodt.mongodb.net/test?retryWrites=true&w=majority";
}

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(routes);
http.listen(port);
