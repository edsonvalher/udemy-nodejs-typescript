import express, { Application } from "express";
import usuarioRoutes from "../routes/usuario";

import cors from "cors";

class Server {
  private app: Application;
  private port: String;

  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  routes() {
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
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
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
