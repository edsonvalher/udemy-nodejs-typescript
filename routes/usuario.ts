import {
  deletetUsuario,
  getUsuario,
  getUsuarios,
  posttUsuario,
  puttUsuario,
  deleteUsuarioLogico,
} from "./../controllers/usuarios";
import { Router } from "express";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", posttUsuario);
router.put("/:id", puttUsuario);
router.delete("/:id", deleteUsuarioLogico);

export default router;
