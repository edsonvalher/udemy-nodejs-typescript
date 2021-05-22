import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
  res.json({
    msg: "GetUsuarios",
  });
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "GetUsuario",
    id,
  });
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
