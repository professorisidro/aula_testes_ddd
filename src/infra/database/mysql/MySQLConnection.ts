import { Dialect, Sequelize } from "sequelize";
import { IConnection } from "../interface/IConnection";

export class MySQLConnection implements IConnection {
    private dbName: string;
    private dbUser: string;
    private dbHost: string;
    private dbDialect: Dialect;
    private dbPass: string;
    private connection: any;

    public constructor() {
        this.dbDialect = "mysql";
        this.dbUser = "root";
        this.dbPass = "mysql"
        this.dbHost = "localhost";
        this.dbName = "db_test";
    }

    setup(): void {
        try {
            this.connection = new Sequelize(this.dbName, this.dbUser, this.dbPass, {
                host: this.dbHost,
                port: 3306,
                dialect: this.dbDialect
            })
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