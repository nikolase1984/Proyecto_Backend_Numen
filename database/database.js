const mongoose = require("mongoose"); //requerimos mongoose para conectar con mongodb
mongoose.set("strictQuery", false); //desactivamos stricyQuery
require("dotenv").config(); //configuramos el enviroment dotenv

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Base de datos conectada");
  } catch {
    console.log("No se pudo conectar base de datos");
  }
};

module.exports = { connect };
