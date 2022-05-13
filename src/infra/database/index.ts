import { IConnection } from "./interface/IConnection";
import { MySQLConnection } from "./mysql/MySQLConnection";

// aqui eu apenas exporto a conexão que fiz com o banco MySQL
// dá pra melhorar fazendo uso do Pattern Factory
const dbConn: IConnection = new MySQLConnection();

export default dbConn;