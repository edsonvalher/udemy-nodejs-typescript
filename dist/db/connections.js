"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./node.db",
});
exports.default = db;
