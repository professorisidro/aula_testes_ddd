import { ClienteRepo } from "../../../repository/cliente/ClienteRepo";
import { UseCaseCliente } from "./UseCaseCliente";

import cliRepo from "../../../repository/cliente";
/* jest.useFakeTimers();
iconv.encodingExists('foo');



jest.mock("../../../repository/cliente/ClienteRepo");

const ClienteRepoMock = ClienteRepo as jest.Mock<ClienteRepo>; */

describe("Teste dos casos de uso do cliente", () => {

    //const cliRepo = new ClienteRepoMock() as jest.Mocked<ClienteRepo>;

    //cliRepo.REPO_recuperarTodos.mockResolvedValue([]);
        
    const ucc: UseCaseCliente = new UseCaseCliente(cliRepo);

    test("Recuperando todos", async() =>{
        expect(ucc.recuperarTodos()).toBeTruthy();
    })
});

