"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConnection = void 0;
const sequelize_1 = require("sequelize");
class MySQLConnection {
    constructor() {
        this.dbDialect = "mysql";
        this.dbUser = "root";
        this.dbPass = "mysql";
        this.dbHost = "localhost";
        this.dbName = "db_test";
    }
    setup() {
        try {
            this.connection = new sequelize_1.Sequelize(this.dbName, this.dbUser, this.dbPass, {
                host: this.dbHost,
                port: 3306,
                dialect: this.dbDialect
            });
            this.connection.authenticate();
            console.log("Database Connected");
        }
        catch (error) {
            console.error(error);
        }
    }
    getconnection() {
        if (!this.connection) { // se não estiver conectado, realiza a conexao
            this.setup();
        }
        return this.connection;
    }
}
exports.MySQLConnection = MySQLConnection;
