"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUsuario = exports.puttUsuario = exports.posttUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: "GetUsuarios",
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "GetUsuario",
        id,
    });
};
exports.getUsuario = getUsuario;
const posttUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post usuario",
        body,
    });
};
exports.posttUsuario = posttUsuario;
const puttUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "put usuario",
        body,
        id,
    });
};
exports.puttUsuario = puttUsuario;
const deletetUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "GetUsuario",
        id,
    });
};
exports.deletetUsuario = deletetUsuario;
