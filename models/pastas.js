const { Schema, model } = require("mongoose");

const productos = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  sabor: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
    enum: ["medio kilogramo", "un kilogramo"],
  },
  precio: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

const pastas = model("pastas", productos);
module.exports = { pastas };
