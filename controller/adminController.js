const adminService = require("../services/adminServices");

exports.postUser = async (req,res) =>{
    const { nome, email, celular, senha } = req.body;
    try{
        await adminService.postAdmin(nome,email,celular,senha);
        res.status(201).send("Administrador criado com sucesso");
    }catch (error) {
        console.error('Erro no controller:', error);
        res.status(500).send('Erro ao criar usuário');
    }
}

exports.getAdmin = async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const admin = await adminService.getByEmailPass(email, senha);
      if (!admin) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
  
      res.json(admin);
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      res.status(500).send('Erro interno no servidor.');
    }
  };