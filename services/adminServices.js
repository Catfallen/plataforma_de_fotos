const pool = require('../db');
const bcrypt = require('bcrypt');


exports.postAdmin = async (nome, email, celular, senha) => {
    const hash = await bcrypt.hash(senha, 10); // 10 é o "salt rounds"

    await pool.query(
        'INSERT INTO administrador (nome, email, celular, senha) VALUES ($1, $2, $3, $4)',
        [nome, email, celular, hash]
    );
};

exports.getByEmailPass = async (email, senha) => {
    const result = await pool.query(
      'SELECT * FROM administrador WHERE email = $1',
      [email.trim()]
    );
  
    const admin = result.rows[0];
    if (!admin) return null;
  
    const match = await bcrypt.compare(senha, admin.senha);
    if (!match) return null;
  
    const { nome, celular, email: adminEmail } = admin;
    return { nome, celular, email: adminEmail };
  };
  


/*
exports.getByEmailPass = async (email,senha) =>{
    const result = await pool.query("Select nome,celular,email from administrador where email = $1 and senha = $2",[email,senha]);   
    return result.rows;
}
*/


/*
exports.postAdmin = async (nome,email,celular,senha) => {
    await pool.query('INSERT INTO administrador (nome,email,celular,senha) VALUES ($1,$2,$3,$4)',[nome,email,celular,senha]);
}
*/
