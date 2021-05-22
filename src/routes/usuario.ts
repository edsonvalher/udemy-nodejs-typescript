import {
  deletetUsuario,
  getUsuario,
  getUsuarios,
  posttUsuario,
  puttUsuario,
} from "./../controllers/usuarios";
import { Router } from "express";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", posttUsuario);
router.put("/:id", puttUsuario);
router.delete("/:id", deletetUsuario);

export default router;
