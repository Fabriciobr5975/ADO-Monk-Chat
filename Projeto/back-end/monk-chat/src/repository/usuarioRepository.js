import connection from './connection.js';

export async function inserirUsuario(usuario) {
    const comando = `
        INSERT INTO TB_USUARIO(NM_USUARIO, DS_EMAIL, DS_SENHA, DT_CRIACAO)
            VALUES(?, ?, ?, ?)
    `;

    const [resposta] = await connection.query(comando, [
        usuario.nm_usuario,
        usuario.ds_email,
        usuario.ds_senha,
        usuario.dt_criacao
    ]);

    return resposta.insertId;
}

export async function alterarUsuario(id_usuario, usuario) {
    const comando = `
        UPDATE TB_USUARIO SET NM_USUARIO = ?,
                          DS_EMAIL = ?,
                          DS_SENHA = ?
            WHERE ID_USUARIO = ?
    `;

    const [resposta] = await connection.query(comando, [
        usuario.nm_usuario,
        usuario.ds_email,
        usuario.ds_senha,
        id_usuario
    ]);

    return resposta.affectedRows;
}

export async function removerUsuario(id_usuario) {
    const comando = `DELETE FROM TB_USUARIO WHERE ID_USUARIO = ?`;

    const [resposta] = await connection.query(comando, [id_usuario]);

    return resposta.affectedRows;

}

export async function listarUsuario() {
    const comando = `
        SELECT * FROM TB_USUARIO;
    `;

    const [registros] = await connection.query(comando);

    return registros
}

export async function buscarUsuarioPorEmailSenha(ds_email, ds_senha) {
    const comando = `
        SELECT * FROM TB_USUARIO
            WHERE DS_EMAIL = ? AND DS_SENHA = ?
    `;

    const [registros] = await connection.query(comando, [
        ds_email,
        ds_senha
    ]);

    return registros
}

buscarUsuarioPorEmailSenha