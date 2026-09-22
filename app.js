import express from "express";
import { Sequelize } from "sequelize";
import "dotenv/config";
import { sequelize } from "./src/config/database.js";
import { conexionBaseDatos } from "./src/config/database.js";
console.log("Puerto configurado:", process.env.PORT);
console.log("Base de datos:", process.env.DB_NAME);
console.log("Usuario de DB:", process.env.DB_USER);
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`server corriendo en el puerto ${PORT}`);
  console.log(`server: http://localhost:${PORT}`);
});
