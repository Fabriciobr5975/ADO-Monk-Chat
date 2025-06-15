import {
    inserirSalaService,
    alterarSalaService,
    removerSalaService,
    listarSalaService,
    buscarSalaPorNomeService,
} from '../service/salaService.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post("/sala", async(req, resp) => {
    try {
        const sala = req.body;
        const resposta = await inserirSalaService(sala);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.put("/sala/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const sala = req.body;
        const resposta = await alterarSalaService(id, sala);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.delete("/sala/:id", async(req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await removerSalaService(id);

        resp.send({resposta});
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});


endpoint.get("/sala", async(req, resp) => {
    try {
        const registros = await listarSalaService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.get("/sala/:nome", async(req, resp) => {
    try {
        const nome = req.params.nome;
        const registros = await buscarSalaPorNomeService(nome);

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

export default endpoint;