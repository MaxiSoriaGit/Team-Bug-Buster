import express from "express";
import { Sequelize } from "sequelize";

const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, async () => {
  console.log(`server corriendo en el puerto ${PORT}`);
  console.log(`server: http://localhost:${PORT}`);
});
