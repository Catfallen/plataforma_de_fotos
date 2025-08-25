const pool = require('../db');
exports.getAll = async () =>{
    const result = await pool.query('SELECT * from clientes');
    return result.rows;


}

exports.cadastro = async (nome,email,celular) =>{
    await pool.query('INSERT INTO clientes (nome,email,celular) VALUES ($1,$2,$3)',[nome,email,celular]);
}