import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    typeCast: function (field, next) {
        if(field.type === 'DATETIME') {
            let agora = new Date(field.string());
            let msg = agora.toLocaleTimeString('pt-br') + ' ' + agora.toLocaleDateString('pt-br');
            
            return msg;
        } else {
            return next();
        }
    }
});

console.log(`--> Conexão ao Banco de dados realizada com sucesso`);
export default connection;