const express = require("express");
const Slider = require("../models/slider");
const router = express.Router();

//Crear Usuario
router.post("/slider", (req,res)=>{
  const slide = Slider(req.body);
  slide
  .save()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener todos los usuarios 
router.get("/slider",(req,res)=>{
    Slider
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener usuario por Id
router.get("/slider/:id", (req, res)=>{
  const {id} = req.params;
  Slider
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Actualizar usuario
router.put('/slider/:id',(req,res)=>{
  const {id} = req.params;
  const {titulo,descripcion,imagen} = req.body;
  Slider
  .updateOne({_id:id},{$set:{titulo,descripcion,imagen}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Eliminar usuario
router.delete('/slider/:id',(req,res)=>{
  const {id} = req.params;
  Slider
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

module.exports = router;