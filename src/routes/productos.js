const express = require("express");
const Producto = require("../models/productos");
const router = express.Router();

//Crear Usuario
router.post("/productos", (req,res)=>{
  const producto = Producto(req.body);
  producto
  .save()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener todos los usuarios 
router.get("/productos",(req,res)=>{
    Producto
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener usuario por Id
router.get("/productos/:id", (req, res)=>{
  const {id} = req.params;
  Producto
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Actualizar usuario
router.put('/productos/:id',(req,res)=>{
  const {id} = req.params;
  const {nombre,descripcion,categoria,precio,existencia,imagen} = req.body;
  Producto
  .updateOne({_id:id},{$set:{nombre,descripcion,categoria,precio,existencia,imagen}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Eliminar usuario
router.delete('/productos/:id',(req,res)=>{
  const {id} = req.params;
  Producto
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

module.exports = router;