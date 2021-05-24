import express, { Application } from "express";
import usuarioRoutes from "../routes/usuario";

import cors from "cors";
import db from "../db/connections";

class Server {
  private app: Application;
  private port: String;

  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  routes() {
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database online");
    } catch (error) {
      throw new Error(error);
    }
  }

  middleWares() {
    //configurar cors
    this.app.use(cors());

    //lectura de body
    this.app.use(express.json());
    //carpeta publica
    this.app.use(express.static("public"));
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.middleWares();
    //rutas
    this.routes();
    //db
    this.dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
