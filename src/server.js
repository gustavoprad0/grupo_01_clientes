require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool, inicializarBanco } = require('./db');
const { criarRepository } = require('./repository');
const { criarApp } = require('./app');

async function main() {
  await inicializarBanco();

  const app = criarApp(criarRepository(pool));

  const porta = Number(process.env.PORT || 3001);
  app.listen(porta, () => console.log(`API de clientes rodando em http://localhost:${porta}`));
}

// Explica o erro de conexão em português, com o que fazer
function explicarErro(err) {
  const usuario = process.env.DB_USER || 'aluno_unifio';
  const banco = process.env.DB_NAME || 'bd_clientes';
  const host = `${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 3306}`;
  const temEnv = fs.existsSync(path.join(__dirname, '..', '.env'));
  console.error('\nFalha ao iniciar a aplicação.');
  console.error(`Tentei conectar no MySQL em ${host}, banco "${banco}", usuário "${usuario}".`);
  if (!temEnv) console.error('Atenção: o arquivo .env NÃO existe nesta pasta (passo 3 do enunciado: copie .env.example para .env).');

  const dicas = {
    ER_ACCESS_DENIED_ERROR: `O MySQL recusou o usuário/senha. Crie o usuário "${usuario}" (Opção A do enunciado) ou coloque no .env o usuário e a senha que você já usa no seu MySQL.`,
    ER_DBACCESS_DENIED_ERROR: `O usuário "${usuario}" não tem permissão no banco "${banco}". Rode o GRANT ALL PRIVILEGES da Opção A.`,
    ER_BAD_DB_ERROR: `O banco "${banco}" não existe. Rode: CREATE DATABASE ${banco};`,
    ECONNREFUSED: 'Nenhum MySQL respondendo. Opção A: inicie o serviço do MySQL. Opção B: abra o Docker Desktop e rode "docker compose up -d".',
    ENOTFOUND: 'O DB_HOST do .env está errado. Use DB_HOST=localhost.',
  };
  console.error(`Detalhe: ${err.message}`);
  let chave = err.code;
  if (/Access denied for user .* to database/.test(err.message)) chave = 'ER_DBACCESS_DENIED_ERROR';
  else if (/Access denied for user/.test(err.message)) chave = 'ER_ACCESS_DENIED_ERROR';
  else if (/Unknown database/.test(err.message)) chave = 'ER_BAD_DB_ERROR';
  console.error(`O que fazer: ${dicas[chave] || 'confira a seção "Se algo der errado" do enunciado.'}\n`);
}

main().catch((err) => {
  explicarErro(err);
  process.exit(1);
});
