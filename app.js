const express = require("express");
const logger = require("morgan"); //mapeo del servidor por consola
const cors = require("cors"); //middleware de nivel de aplicacion.

const app = express();

const indexRouter = require("./routers/index");
const apiRouter = require("./routers/api");
const { connect } = require("./database/database");

app.use(express.json()); //permite enviar obtejos a traves de las rutas por req.body
app.use(logger("dev"));
app.use(cors()); //habilita cruce de info entre consultas http (consulta cruzada entre servidores)

app.use("/", indexRouter);
app.use("/api", apiRouter);
connect();

module.exports = app;
