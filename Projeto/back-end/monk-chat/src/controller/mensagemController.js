import {
    inserirMensagemService,
    alterarMensagemService,
    removerMensagemService,
    listarMensagemService,
    listarMensagemPorIdSalaService
} from '../service/mensagemService.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post("/mensagem", async(req, resp) => {
    try {
        const mensagem = req.body;
        const resposta = await inserirMensagemService(mensagem);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.put("/mensagem/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const mensagem = req.body;
        const resposta = await alterarMensagemService(id, mensagem);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.delete("/mensagem/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await removerMensagemService(id);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});


endpoint.get("/mensagem", async(req, resp) => {
    try {
        const registros = await listarMensagemService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.get("/mensagem/:sala", async(req, resp) => {
    try {
        const sala = req.params.sala;
        const registros = await listarMensagemPorIdSalaService(sala);

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoint;