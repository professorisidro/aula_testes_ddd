"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MySQLConnection_1 = require("./mysql/MySQLConnection");
// aqui eu apenas exporto a conexão que fiz com o banco MySQL
// dá pra melhorar fazendo uso do Pattern Factory
const dbConn = new MySQLConnection_1.MySQLConnection();
exports.default = dbConn;
