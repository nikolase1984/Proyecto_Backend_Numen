const { pastas } = require("../models/pastas");

class ApiController {
  async list(req, res) {
    const productos = await pastas.find(); //pastas en el models schema
    res.status(200).json(productos);
  }

  async buscarPorID(req, res) {
    const productos = await pastas.findById(req.params.id); //pastas en el models schema
    res.status(200).json(productos);
  }

  async buscarPorNombre(req, res) {
    const productos = await pastas.find({ nombre: req.params.nombre }); //pastas en el models schema
    res.status(200).json(productos);
  }

  async buscarPorSabor(req, res) {
    const productos = await pastas.find({ sabor: req.params.sabor }); //pastas en el models schema
    res.status(200).json(productos);
  }

  async crear(req, res) {
    try {
      const nuevoProducto = new pastas(req.body);
      await nuevoProducto.save();
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async editar(req, res) {
    try {
      await pastas.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        msg: "Se modifico el producto " + req.params.id + " con exito",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async eliminar(req, res) {
    await pastas.findByIdAndDelete(req.params.id);
    res.status(204).send();
  }
}

module.exports = new ApiController();
