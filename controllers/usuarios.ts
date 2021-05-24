import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(404).json({
      msg: `no existe un usuario con el id ${id}`,
    });
  }

  res.json(usuario);
};

export const posttUsuario = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: "post usuario",
    body,
  });
};

export const puttUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "put usuario",
    body,
    id,
  });
};

export const deletetUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "GetUsuario",
    id,
  });
};
