const User = require('../models/User');

// index = retorna uma listagem de sessões, 
// show = lista uma única sessão, 
// store = cria uma sessão, 
// update = atualizar/alterar uma sessão, 
// destroy = deletar/remover uma sessão

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        //quando um usuário já existir, retornar ele mesmo, armazenando na var user
        let user = await User.findOne({ email })
        
        //se não encontrar, sobrescreve a variável user
        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};