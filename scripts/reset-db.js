// Apaga todos os registros de clientes e remove índices da coluna nome (se existirem).
// Use para recomeçar os testes de performance do zero: npm run db:reset
require('dotenv').config();
const { pool, inicializarBanco } = require('../src/db');

(async () => {
  await inicializarBanco();
  await pool.query('TRUNCATE TABLE clientes');

  const [indices] = await pool.query("SHOW INDEX FROM clientes WHERE Column_name = 'nome'");
  for (const nome of new Set(indices.map((i) => i.Key_name))) {
    await pool.query(`DROP INDEX \`${nome}\` ON clientes`);
    console.log(`Índice removido: ${nome}`);
  }

  console.log('Tabela clientes zerada.');
  await pool.end();
})().catch(async (err) => {
  console.error(err.message);
  await pool.end();
  process.exit(1);
});
