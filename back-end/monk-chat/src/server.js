import 'dotenv/config';
import cors from 'cors';
import adicionarRotas from './routers.js';

import express from 'express';

const server = express();
server.use(express.json());
server.use(cors());

adicionarRotas(server);

const PORTA = process.env.PORTA;
server.listen(
    PORTA, 
    () => console.log(`API subiu na porta ${PORTA} com sucesso`)
);
