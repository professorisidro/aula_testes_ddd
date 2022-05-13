import { DataTypes, Sequelize, Model } from "sequelize";
import dbConn from "../infra/database";

const sequelize: Sequelize = dbConn.getconnection();

export class Cliente extends Model {

}

Cliente.init({
    id: {
        type: DataTypes.INTEGER,
        field: "id",
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        field: "nome"
    },
    email: {
        type: DataTypes.STRING(100),
        field: "email"
    },
    whatsapp: {
        type: DataTypes.STRING(20),
        field: "telefone"
    }
},
    {
        tableName: "tbl_cliente",
        timestamps: false,
        sequelize
    }
);