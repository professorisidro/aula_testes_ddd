import { Cliente } from "../../model/Cliente";

export class ClienteRepo {

    public async REPO_recuperarTodos() {
        try {
            return await Cliente.findAll(); // esse cara aqui vai fazer o SELECT
        }
        catch (err) {
            console.error(err);
        }
    }
}