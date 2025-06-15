import {
    inserirUsuarioService,
    alterarUsuarioService,
    removerUsuarioService,
    listarUsuarioService,
    buscarUsuarioPorEmailSenhaService
} from '../service/usuarioService.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post("/usuario", async (req, resp) => {
    try {
        const usuario = req.body;
        const resposta = await inserirUsuarioService(usuario);

        resp.send({ resposta });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.put("/usuario/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const usuario = req.body;
        const resposta = await alterarUsuarioService(id, usuario);

        resp.send({ resposta });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.delete("/usuario/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const resposta = await removerUsuarioService(id);

        resp.send({ resposta });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});


endpoint.get("/usuario", async (req, resp) => {
    try {
        const registros = await listarUsuarioService();

        resp.send(registros);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
});

endpoint.get("/usuario/dados", async (req, resp) => {
    try {
        const email = req.query.email;
        const senha = req.query.senha;

        const registro = await buscarUsuarioPorEmailSenhaService(email, senha);

        resp.send(registro);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }   
});

export default endpoint;