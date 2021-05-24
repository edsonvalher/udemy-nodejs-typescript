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

export const posttUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: `Ya existe un usuario con ${body.email}`,
      });
    }

    const usuario = Usuario.build(body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hablar con administrador",
    });
  }
};

export const puttUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(400).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }

    await usuario.update(body);
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hablar con administrador",
    });
  }
};

export const deletetUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(400).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }

  //eliminacion fisica
  await usuario.destroy();

  res.json(usuario);
};

export const deleteUsuarioLogico = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    return res.status(400).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }

  //eliminacion logica
  await usuario.update({ estado: false });

  res.json(usuario);
};
