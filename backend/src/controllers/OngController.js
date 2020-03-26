const connection = require('../database/connection');
const crypto = require('crypto');

/** async e await faz o codigo esperar receber os dados antes de dar a resposta */
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create (request, response) {
        /** colocando os dados capturados em variaveis */
        const { name, email, whatsapp, city, uf } = request.body;

        /** criando ID aleatoriamente */
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });

        }
}