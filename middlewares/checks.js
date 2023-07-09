const { check } = require("express-validator");
const checks = [
  check("nombre")
    .notEmpty().withMessage("campo obligatorio")
    .isString().withMessage("el campo debe ser de tipo string"),
  check("sabor")
    .notEmpty().withMessage("campo obligatorio")
    .isString().withMessage("el campo debe ser de tipo string"),
  check("peso")
    .notEmpty().withMessage("campo obligatorio")
    .isString().withMessage("el campo debe ser de tipo string"),
  check("precio")
    .notEmpty().withMessage("campo obligatorio")
    .isNumeric().withMessage("el campo debe ser numerico"),
  check("descripcion")
    .notEmpty().withMessage("campo obligatorio")
    .isString().withMessage("el campo debe ser de tipo string"),
];

module.exports = checks;
