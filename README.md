# Grupo 01 — API de Clientes

API REST em **Node.js + Express + MySQL** para o trabalho de Verificação e Validação de Software.
Leia o **enunciado do seu grupo** antes de começar: ele define o que cada integrante entrega.

## Rodando (siga o passo a passo completo na seção 3 do enunciado)

**1. Banco de dados: escolha UMA opção** (as duas usam a porta 3306; não use as duas ao mesmo tempo). Na dúvida, use a Opção A.

Opção A: MySQL instalado. No Workbench, logado como root:
```sql
CREATE DATABASE bd_clientes;
CREATE USER 'aluno_unifio'@'localhost' IDENTIFIED BY 'abc123';
GRANT ALL PRIVILEGES ON bd_clientes.* TO 'aluno_unifio'@'localhost';
FLUSH PRIVILEGES;
```
Opção B: MySQL no Docker. Exige o Docker Desktop instalado e aberto (no Windows: WSL 2 ativo e virtualização ligada na BIOS). O banco e o usuário são criados automaticamente:
```bash
docker compose up -d
```

**2. Configuração e execução**
```bash
copy .env.example .env         # Windows (Prompt). PowerShell: Copy-Item .env.example .env | Linux/macOS: cp .env.example .env
npm install
npm start                      # deve mostrar: API de clientes rodando em http://localhost:3001
```
Confira no navegador: `http://localhost:3001/categorias` deve listar 1 – Ouro e 2 – Prata.
Em outro terminal: `npm test` (o teste de exemplo deve passar, mesmo com o banco desligado).

A aplicação cria as tabelas `categorias` e `clientes` ao subir. A coluna `nome` é criada **sem índice** de propósito.

## Endpoints
| Método | Rota | Sucesso | Erros |
|---|---|---|---|
| GET | `/categorias` | 200 | — |
| GET | `/clientes?nome=Ab&modo=prefixo&limite=20` | 200 | 400 |
| GET | `/clientes/:id` | 200 | 400, 404 |
| POST | `/clientes` | 201 | 400, 409 |
| PUT | `/clientes/:id` | 200 | 400, 404, 409 |
| DELETE | `/clientes/:id` | 204 | 400, 404 |

- `modo`: `prefixo` (padrão, `LIKE 'Ab%'`) ou `contem` (`LIKE '%Ab%'`); `limite`: 1 a 100 (padrão 20)
- Corpo do POST/PUT: `{ "nome": "Ana Souza", "email": "ANA@Email.com", "categoriaId": 1 }`
- Regras: `nome` com 3 a 100 caracteres; `email`: email válido, único; `categoriaId` deve existir.

## Arquitetura
```
src/regras.js      regras de negócio (funções puras) -> testadas direto, sem mock
src/app.js         rotas HTTP, usa as regras           -> recebe o repository por parâmetro
src/repository.js  SQL (mysql2)        -> recebe o pool por parâmetro
src/db.js          pool + criação das tabelas
src/server.js      monta tudo e sobe o servidor
```
Nos testes unitários, teste as funções de `src/regras.js` diretamente; para as rotas, passe um repository **falso** (`jest.fn()`) para `criarApp` e faça as requisições com o supertest. Veja `__tests__/exemplo.test.js`.

## Comandos
```bash
npm test                              # testes unitários
npm run test:coverage                 # com cobertura
npm run verificar -- --aluno SEU_LOGIN   # confere o formato da sua entrega
npm run db:reset                      # zera a tabela e remove índices de nome
```
