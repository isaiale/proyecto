const express = require("express");
const InfEmpresa = require("../models/infEmpresa");
const router = express.Router();

//Crear Usuario
router.post("/infEmpre", (req,res)=>{
  const footers = InfEmpresa(req.body);
  footers
  .save()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener todos los usuarios 
router.get("/infEmpre",(req,res)=>{
  InfEmpresa
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener usuario por Id
router.get("/infEmpre/:id", (req, res)=>{
  const {id} = req.params;
  InfEmpresa
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Actualizar usuario
router.put('/infEmpre/:id',(req,res)=>{
  const {id} = req.params;
  const {nombre,informacion,direccion,telefono,correo,logo} = req.body;
  InfEmpresa
  .updateOne({_id:id},{$set:{nombre,informacion,direccion,telefono,correo,logo}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Eliminar usuario
router.delete('/infEmpre/:id',(req,res)=>{
  const {id} = req.params;
  InfEmpresa
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

module.exports = router;