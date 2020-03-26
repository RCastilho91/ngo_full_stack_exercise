const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 *  Metodos HTTP:
 * 
 *  GET: busca informacao no back
 *  POST: cria informacao no back
 *  PUT: altera informacao no back
 *  DELETE: deleta informacao no back
 * 
 */

 /**
  *  Tipos de parametros
  * 
  *  Query params: parametros nomeados enviados apos o ? no URL (filtros, paginacao)
  * 
  *  Route params: parametros utilizados para identificar recursos
  *     ex: app.get('/users/:id), levaria ao back entender que o que viria apos a barra seria um ID
  *     www.whatever.com/users/1 <- o 1 seria o ID
  * 
  *  Request body: corpo da requisicao pra criar ou alterar recursos (metodo post)
  *     o app.use(express.json()); serve para o servidor entender que os dados estao sendo enviados
  *     pela URL em formato JSON, possibilitando que ele entenda o corpo do conteudo.
  * 
  */

/**
 *  Fazendo as atualizacoes sem ter que ficar derrubando e reiniciando o servidor toda vez:
 *  lib NODEMON esta ai pra isso.
 *  Em package.json, trocar a parte de "scripts" de "test" para "start" 
 *  e o parametro para "nodemon index.js"
 *  npm start logo em seguida
 */


 /** Bancos de dados:
  * 
  * SQL: mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, + infinitos
  * 
  * O driver do JS pra isso e o KNEX (npm install pg, sqlite3, mysql, mysql2, oracledb, mssql)
  * npx knex init no diretorio do arquivo
  * 
  * Novas tabelas = migrations. Da pra criar um arquivo focado nisso e colocar no knexfile.js como
  * 
  *     migrations: {
  *         directory: '.src/database/migrations
  *      },
  * 
  *  logo abaixo do filename.
  * 
  * Pra criar cada uma, npx knex migrate:make create_nomeAleatorio
  * 
  * dentro do novo arquivo criado:
  * 
  * knex.schema.createTable('ongs', function (table) {
        table.string('id').primary()
  * e depois rodar npx knex migrate:run
  * se der merda, rodar npx knew migrate:rollback pra desfazer
  * npx knex migrate:status mostra quais ja foram roladas
  * 
  * depois criar um connection.js dentro de database configurando a conexao com o DB e importando
  * nos arquivos que precisam se comunicar com o DB
  */


/** Comandos de DB:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */

/** Rotas
 * 
 * Depois, criar um arquivo routes.js pra definir as rotas /info, /users, etc...
 * Trocar o app.get ou app.post por routes.get, routes.post nesse novo arquivo
 * No routes, exportar com module.exports = routes;
 * No app, importar com const routes = requires('./routes');
 * 
 */

 /** Modulo de seguranca
  * 
  * CORS = npm install CORS
  * 
  */


app.listen(3333);


