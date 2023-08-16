const express = require("express");
const UserSchema = require("../models/user");
const router = express.Router();

// Crear Usuario
router.post("/users", (req, res) => {
  const { nombre, nombreUsers, correo, contraseña, pregunta, respuesta } = req.body;
  const user = new UserSchema({
    nombre: nombre,
    nombreUsers: nombreUsers,
    contraseña: contraseña,
    correo: correo,
    pregunta: pregunta,
    respuesta: respuesta,
    rol: '64dc4875a909109c337b700e'
  });

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Consultar usuarios con información de roles
router.get("/users", (req, res) => {
  UserSchema.aggregate([
    {
      $lookup: {
        from: 'rols', // Nombre de la colección de roles
        localField: 'rol',
        foreignField: '_id',
        as: 'rol',
      },
    },
  ])
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los usuarios
router.get("/users/all", (req, res) => {
  UserSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener usuario por Id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  UserSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar usuario
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, nombreUsers, correo, contraseña, pregunta, respuesta, rol } = req.body;
  UserSchema.updateOne({ _id: id }, { $set: { nombre, nombreUsers, correo, contraseña, pregunta, respuesta, rol } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar usuario
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  UserSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
