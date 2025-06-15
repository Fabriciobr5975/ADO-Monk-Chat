import usuarioController from './controller/usuarioController.js';
import mensagemController from './controller/mensagemController.js';
import salaController from './controller/salaController.js';
import participanteController from './controller/participanteController.js';

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(mensagemController);
    servidor.use(salaController);
    servidor.use(participanteController);
}