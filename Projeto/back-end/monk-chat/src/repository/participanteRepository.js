import connection from './connection.js';

export async function inserirParticipante(participante) {
    const comando = `
        INSERT INTO TB_PARTICIPANTE (ID_USUARIO, ID_SALA)
            VALUE (?, ?)
    `;

    const [resposta] = await connection.query(comando, [
        participante.id_usuario,
        participante.id_sala
    ]);

    return resposta.insertId;
}

export async function alterarParticipante(id_participante, participante) {
    const comando = `
        UPDATE TB_PARTICIPANTE SET ID_USUARIO = ?,
                                   ID_SALA = ?
            WHERE ID_PARTICIPANTE = ?
    `;

    const [resposta] = await connection.query(comando, [
        participante.id_usuario,
        participante.id_sala,
        id_participante
    ]);

    return resposta.affectedRows;
}

export async function removerParticipante(id_participante) {
    const comando = `DELETE FROM TB_PARTICIPANTE WHERE ID_PARTICIPANTE = ?`;

    const [resposta] = await connection.query(comando, [id_participante]);

    return resposta.affectedRows;
}

export async function listarParticipante() {
    const comando = `SELECT * FROM TB_PARTICIPANTE`;

    const [registros] = await connection.query(comando);

    return registros;
}