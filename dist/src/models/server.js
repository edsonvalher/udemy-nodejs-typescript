"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
        };
        this.app = express_1.default();
        this.port = process.env.PORT || "8000";
        this.middleWares();
        //rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    middleWares() {
        //configurar cors
        this.app.use(cors_1.default());
        //lectura de body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}
exports.default = Server;
