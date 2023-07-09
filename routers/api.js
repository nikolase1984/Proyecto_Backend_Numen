const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { validadorID } = require("../middlewares/validadorID");
const checks = require ('../middlewares/checks');
const {validadorChecks} = require ('../middlewares/validadorChecks')

router.get("/lista", apiController.list);
router.get("/buscar/id/:id", validadorID, apiController.buscarPorID);
router.get("/buscar/nombre/:nombre", apiController.buscarPorNombre);
router.get("/buscar/sabor/:sabor", apiController.buscarPorSabor);
router.post("/crear", checks, validadorChecks, apiController.crear);
router.put("/editar/id/:id", validadorID, checks, validadorChecks, apiController.editar);
router.delete("/eliminar/id/:id", validadorID, apiController.eliminar);

module.exports = router;
