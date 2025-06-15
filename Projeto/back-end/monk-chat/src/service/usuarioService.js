import { inserirUsuario, alterarUsuario, removerUsuario, listarUsuario, buscarUsuarioPorEmailSenha } from '../repository/usuarioRepository.js'; 

export async function inserirUsuarioService(usuario) {
    const resposta = await inserirUsuario(usuario);

    return resposta;
}

export async function alterarUsuarioService(id_usuario, usuario) {
    const resposta = await alterarUsuario(id_usuario, usuario);

    return resposta;
}

export async function removerUsuarioService(id_usuario) {
    const resposta = await removerUsuario(id_usuario);

    return resposta;
}

export async function listarUsuarioService() {
    const registros = await listarUsuario();

    return registros;
}

export async function buscarUsuarioPorEmailSenhaService(ds_email, ds_senha) {
    const registro = await buscarUsuarioPorEmailSenha(ds_email, ds_senha);

    return registro;
}