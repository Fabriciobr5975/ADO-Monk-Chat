import { inserirParticipante, alterarParticipante, removerParticipante, listarParticipante } from '../repository/participanteRepository.js'; 

export async function inserirParticipanteService(participante) {
    const resposta = await inserirParticipante(participante);

    return resposta;
}

export async function alterarParticipanteService(id_participante, participante) {
    const resposta = await alterarParticipante(id_participante, participante);

    return resposta;
}

export async function removerParticipanteService(id_participante) {
    const resposta = await removerParticipante(id_participante);

    return resposta;
}

export async function listarParticipanteService() {
    const registros = await listarParticipante();

    return registros;
}