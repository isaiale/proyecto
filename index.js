const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const UserRoutes = require("./src/routes/user");
const ProductosRoutes = require("./src/routes/productos");
const RedesSocialesRoutes = require("./src/routes/redesSocialesEmpresa");
const RolRoutes = require("./src/routes/rol");
const InfEmpresaRoutes = require("./src/routes/infEmpresa");


const app = express();
const port = process.env.PORT || 9000;

//interfaz de comunicacion 
app.use(express.json());
app.use('/api',UserRoutes);
app.use('/api',ProductosRoutes);
app.use('/api',RedesSocialesRoutes);
app.use('/api',RolRoutes);
app.use('/api',InfEmpresaRoutes);


//routes
app.get("/", (req, res)=>{
    res.send("Bienvenido a mi api");
});

//conexion a mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a mongo Atlas"))
.catch((error) => console.error(error))

app.listen(port, ()=> console.log("puerto", port));