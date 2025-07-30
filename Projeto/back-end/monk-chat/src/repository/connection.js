import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
            let data = new Date(field.string());
            let dataAjustada = new Date(data.getTime() - (3 * 60 * 60 * 1000)); 

            return dataAjustada.toLocaleTimeString('pt-BR') + ' - ' + dataAjustada.toLocaleDateString('pt-BR');
        } else {
            return next();
        }
    }
});

console.log(`--> Conexão ao Banco de dados realizada com sucesso`);
export default connection;