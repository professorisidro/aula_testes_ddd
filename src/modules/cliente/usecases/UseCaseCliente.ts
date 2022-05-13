import { ClienteRepo } from "../../../repository/cliente/ClienteRepo";

export class UseCaseCliente {

    public constructor (private clienteRepo: ClienteRepo){     
    }

    public cadastrar(): void {

    }
    public  recuperarPeloId(id: number): any {
        return null;
    }

    public async recuperarTodos() {
        return await this.clienteRepo.REPO_recuperarTodos();
    }
}