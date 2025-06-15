import connection from './connection.js';

export async function inserirSala(sala) {
    const comando = `
        INSERT INTO TB_SALA (ID_USUARIO, NM_SALA)
            VALUES (?, ?)
    `;

    const [resposta] = await connection.query(comando, [
        sala.id_usuario,
        sala.nm_sala
    ]);

    return resposta.insertId;
}

export async function alterarSala(id_sala, sala) {
    const comando = `
        UPDATE TB_SALA SET ID_USUARIO = ?,
                           NM_SALA = ?
            WHERE id_sala = ?`;

    const [resposta] = await connection.query(comando, [
        sala.id_usuario,
        sala.nm_sala,
        id_sala
    ])

    return resposta.affectedRows;
}

export async function removerSala(id_sala) {
    const comando = `DELETE FROM TB_SALA WHERE ID_SALA = ?`;

    const [resposta] = await connection.query(comando, [id_sala])

    return resposta.affectedRows;
}

export async function listarSala() {
    const comando = `SELECT * FROM TB_SALA`;

    const [registros] = await connection.query(comando);
    
    return registros;
}

export async function buscarSalaPorNome(nome) {
    const comando = `SELECT * FROM TB_SALA WHERE NM_SALA = ?`;

    const [registros] = await connection.query(comando, [nome]);
    
    return registros;
}