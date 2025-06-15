import connection from './connection.js';

export async function inserirMensagem(mensagem) {
    const comando = `
    INSERT INTO TB_MENSAGEM(ID_USUARIO_ENVIO, ID_USUARIO_PARA, ID_SALA, DS_MENSAGEM, DT_MENSAGEM)
        VALUES(?, ?, ?, ?, ?)
`;

    const [resposta] = await connection.query(comando, [
        mensagem.id_usuario_envio,
        mensagem.id_usuario_para,
        mensagem.id_sala,
        mensagem.ds_mensagem,
        mensagem.dt_mensagem
    ]);

    return resposta.insertId;
}

export async function alterarMensagem(id_mensagem, mensagem) {
    const comando = `
    UPDATE TB_MENSAGEM SET ID_USUARIO_ENVIO = ?,
                           ID_USUARIO_PARA = ?,
                           ID_SALA = ?, 
                           DS_MENSAGEM = ?,
                           DT_MENSAGEM = ?
        WHERE ID_MENSAGEM = ?
`;

    const [resposta] = await connection.query(comando, [
        mensagem.id_usuario_envio,
        mensagem.id_usuario_para,
        mensagem.id_sala,
        mensagem.ds_mensagem,
        mensagem.dt_mensagem,
        id_mensagem
    ]);

    return resposta.affectedRows;
}

export async function removerMensagem(id_mensagem) {
    const comando = `DELETE FROM TB_MENSAGEM WHERE ID_MENSAGEM = ?`;

    const [resposta] = await connection.query(comando, [id_mensagem]);

    return resposta.affectedRows;
}

export async function listarMensagem() {
    const comando = `SELECT * FROM TB_MENSAGEM`;

    const [registros] = await connection.query(comando);

    return registros;
}

export async function listarPorSalaMensagem(sala) {
    const comando = `SELECT ID_MENSAGEM, ID_USUARIO_ENVIO, NM_USUARIO, ID_USUARIO_PARA, (SELECT NM_USUARIO FROM TB_USUARIO WHERE ID_USUARIO = ID_USUARIO_PARA) DESTINATARIO, ID_SALA, DS_MENSAGEM, DT_MENSAGEM 
                        FROM TB_MENSAGEM 
                        INNER JOIN TB_USUARIO on ID_USUARIO = ID_USUARIO_ENVIO
                        WHERE ID_SALA = ?`;

    const [registros] = await connection.query(comando, [sala]);

    return registros;
}

