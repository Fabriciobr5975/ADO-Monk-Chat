import { inserirMensagem, alterarMensagem, removerMensagem, listarMensagem, listarPorSalaMensagem } from '../repository/mensagemRepository.js'; 

export async function inserirMensagemService(mensagem) {
    const resposta = await inserirMensagem(mensagem);

    return resposta;
}

export async function alterarMensagemService(id_mensagem, mensagem) {
    const resposta = await alterarMensagem(id_mensagem, mensagem);

    return resposta;
}

export async function removerMensagemService(id_mensagem) {
    const resposta = await removerMensagem(id_mensagem);

    return resposta;
}

export async function listarMensagemService() {
    const registros = await listarMensagem();

    return registros;
}

export async function listarMensagemPorIdSalaService(sala) {
    const registros = await listarPorSalaMensagem(sala);

    return registros;
}

