import { inserirSala, alterarSala, removerSala, listarSala, buscarSalaPorNome } from '../repository/salaRepository.js'; 

export async function inserirSalaService(sala) {
    const resposta = await inserirSala(sala);

    return resposta;
}

export async function alterarSalaService(id_sala, sala) {
    const resposta = await alterarSala(id_sala, sala);

    return resposta;
}

export async function removerSalaService(id_sala) {
    const resposta = await removerSala(id_sala);

    return resposta;
}

export async function listarSalaService() {
    const registros = await listarSala();

    return registros;
}

export async function buscarSalaPorNomeService(nome) {
   const resposta = await buscarSalaPorNome(nome);

    return resposta; 
}