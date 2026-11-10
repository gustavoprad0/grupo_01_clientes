require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'aluno_unifio',
  password: process.env.DB_PASSWORD || 'abc123',
  database: process.env.DB_NAME || 'bd_clientes',
  connectionLimit: Number(process.env.DB_POOL_SIZE || 10),
  waitForConnections: true,
});

// Cria as tabelas (se não existirem) e os registros da tabela de apoio.
// Observação: a coluna "nome" NÃO tem índice de propósito (faz parte do trabalho).
async function inicializarBanco() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS categorias (
      id   INT PRIMARY KEY,
      nome VARCHAR(60) NOT NULL
    )`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS clientes (
      id        INT AUTO_INCREMENT PRIMARY KEY,
      nome  VARCHAR(100) NOT NULL,
      email  VARCHAR(150) NOT NULL UNIQUE,
      categoria_id  INT NOT NULL,
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_clientes_categorias FOREIGN KEY (categoria_id) REFERENCES categorias(id)
    )`);

  await pool.query(`INSERT IGNORE INTO categorias (id, nome) VALUES (1, 'Ouro'), (2, 'Prata')`);
}

module.exports = { pool, inicializarBanco };
