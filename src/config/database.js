import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("hackanton", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
  dialectOptions: {
    timezone: "local",
    dateStrings: true,
  },
});
export const conexionBaseDatos = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Conexion de la base de datos con exitos");
  } catch (error) {
    console.log("Error al conectar con la base de datos", error);
  }
};
conexionBaseDatos();
