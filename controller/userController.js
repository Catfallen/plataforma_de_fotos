const usuarioService = require('../services/userServices');

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro no controller:', error);
        res.status(500).send('Erro ao buscar usuários');
    }
}


exports.postUser = async (req, res) => {
    const { nome, email , celular } = req.body;
    try {
        await usuarioService.cadastro(nome, email, celular);
        res.status(201).send('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Erro no controller:', error);
        res.status(500).send('Erro ao criar usuário');
    }
};