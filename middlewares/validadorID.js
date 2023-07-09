const { pastas } = require("../models/pastas");
const validadorID = async (req, res, next) => {
  try {
    const producto = await pastas.findById(req.params.id);
    if (producto !== null) {
      next();
    } else {
      res.status(400).json({
        msg: " Id ingresado invalido ",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { validadorID };
