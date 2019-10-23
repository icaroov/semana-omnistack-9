const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        //id do usuário logado
        const { user_id } = req.headers;

        //buscar todos os spots
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}