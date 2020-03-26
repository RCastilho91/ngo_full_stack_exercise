exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        /** criando features de valores incrementais */
        table.increments();
        table.string('title').notNullable;
        table.string('description').notNullable;
        table.decimal('value').notNullable;

        /** pegando o ID da outra tabela */
        table.string('ong-id').notNullable;
        /** criando chave estrangeira */
        table.foreign('ong-id').references('id').inTable('ongs')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
