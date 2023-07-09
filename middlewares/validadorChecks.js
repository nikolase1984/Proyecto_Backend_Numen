const { validationResult } = require("express-validator");

const validadorChecks = (req, res, next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {
    next();
  } else {
    res.status(500).json(err);
  }
};

module.exports = { validadorChecks };
