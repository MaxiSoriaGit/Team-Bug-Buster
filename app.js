import "dotenv/config";
import express from "express";
import { startDB } from "./src/config/database.js";
import "./src/models/index.js";
import cookieParser from "cookie-parser";
import { authRouter } from "./src/routes/auth.routes.js";
import { userRouter } from "./src/routes/user.routes.js";
import { ProfileModel } from "./src/models/profile.model.js";
import { UserModel } from "./src/models/user.model.js";

const app = express();

const PORT = process.env.PORT || 3000;

//para que el server entienda el formato json
app.use(express.json());

//necesario para leer las cookies req.cookies
app.use(cookieParser());

//configuracion de rutas
app.use("/api", authRouter);
app.use("/api", userRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log(`servidor corriendo en el puerto ${PORT}`);
  console.log(`server http://localhost: ${PORT}`);
});
