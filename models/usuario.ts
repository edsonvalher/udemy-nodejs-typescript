import { DataType, DataTypes } from "sequelize";
import db from "../db/connections";

const Usuario = db.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
});

export default Usuario;
