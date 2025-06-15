import {
    inserirParticipanteService,
    alterarParticipanteService,
    removerParticipanteService,
    listarParticipanteService
} from '../service/participanteService.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post("/participante", async(req, resp) => {
    try {
        const participante = req.body;
        const resposta = await inserirParticipanteService(participante);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.put("/participante/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const participante = req.body;
        const resposta = await alterarParticipanteService(id, participante);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.delete("/participante/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await removerParticipanteService(id);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});


endpoint.get("/participante", async(req, resp) => {
    try {
        const registros = await listarParticipanteService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoint;