const express = require("express");
const UserSchema = require("../models/user");
const router = express.Router();

//Crear Usuario
router.post("/users", (req,res)=>{
  const user = UserSchema(req.body);
  user
  .save()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Obtener todos los usuarios 
router.get("/users",(req,res)=>{
  UserSchema
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//consultar
router.get('/users',(req,res)=>{
  UsersSchema.aggregate([
      {
          $lookup:{
              from:'rols',
              localField:'rol',
              foreignField:'_id',
              as:'rol'
          }
      }
  ])
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

//Obtener usuario por Id
router.get("/users/:id", (req, res)=>{
  const {id} = req.params;
  UserSchema
  .findById(id)
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Actualizar usuario
router.put('/users/:id',(req,res)=>{
  const {id} = req.params;
  const {nombre,nombreUsers,contraseña,correo} = req.body;
  UserSchema
  .updateOne({_id:id},{$set:{nombre,nombreUsers,contraseña,correo}})
  .then((data)=>res.json(data))
  .catch((error)=> res.json({message:error}));
});

//Eliminar usuario
router.delete('/users/:id',(req,res)=>{
  const {id} = req.params;
  UserSchema
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

module.exports = router;