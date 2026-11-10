// Confere se a SUA entrega está no formato que a correção automática espera.
// Uso: npm run verificar -- --aluno seu-usuario-github     (ou sem --aluno para ver o grupo todo)
// Este script NÃO dá nota: ele só aponta arquivos faltando ou fora do padrão.
const fs = require('fs');
const path = require('path');
const { distribuirCTs } = require('./distribuicao');

const RAIZ = path.join(__dirname, '..');
const ok = (m) => console.log(`  [ok]   ${m}`);
const falta = (m) => console.log(`  [FALTA] ${m}`);
const aviso = (m) => console.log(`  [aviso] ${m}`);

function lerJson(arq) {
  try { return JSON.parse(fs.readFileSync(arq, 'utf8')); } catch { return null; }
}

function acharArquivos(dir, nome, lista = []) {
  if (!fs.existsSync(dir)) return lista;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) acharArquivos(p, nome, lista);
    else if (item.name === nome) lista.push(p);
  }
  return lista;
}

function verificarStatistics(pasta, rotulo, labelsObrigatorios) {
  const arqs = acharArquivos(pasta, 'statistics.json');
  if (arqs.length === 0) return falta(`${rotulo}: nenhum statistics.json (gere o dashboard com -e -o)`);
  const stats = lerJson(arqs[0]);
  if (!stats) return falta(`${rotulo}: statistics.json inválido`);
  const faltando = labelsObrigatorios.filter((l) => !stats[l]);
  if (faltando.length) return falta(`${rotulo}: requisições sem o nome padrão: ${faltando.join(', ')}`);
  ok(`${rotulo}: statistics.json com ${labelsObrigatorios.join(', ') || 'Total'}`);
}

const grupo = lerJson(path.join(RAIZ, 'grupo.json'));
if (!grupo) { console.error('grupo.json ausente ou inválido.'); process.exit(1); }

const integrantes = (grupo.integrantes || []).filter((i) => i.github && i.github.trim());
if (integrantes.length === 0) {
  console.log('Nenhum integrante preenchido em grupo.json (campo "github"). Comece por aí.');
  process.exit(0);
}
const mapa = distribuirCTs(integrantes.length);
const argAluno = process.argv.indexOf('--aluno');
const filtro = argAluno > -1 ? String(process.argv[argAluno + 1] || '').toLowerCase() : null;

integrantes.forEach((aluno, idx) => {
  const login = aluno.github.trim().toLowerCase();
  if (filtro && login !== filtro) return;
  console.log(`\n=== Integrante ${aluno.integrante} — ${aluno.nome || '(sem nome)'} — @${login}`);
  if (!aluno.ra) aviso('RA não preenchido em grupo.json');

  // Parte 1 — testes unitários
  const arqTeste = path.join(RAIZ, '__tests__', `${login}.test.js`);
  if (!fs.existsSync(arqTeste)) falta(`__tests__/${login}.test.js`);
  else {
    const src = fs.readFileSync(arqTeste, 'utf8');
    for (const ct of mapa[idx]) {
      const re = new RegExp(`['"\`]${ct}\\b`);
      if (re.test(src)) ok(`${ct} encontrado`);
      else falta(`${ct}: nenhum teste cujo nome comece com "${ct}"`);
    }
    if (/require\([^)]*(src\/db|mysql2|src\/server)/.test(src)) {
      aviso('o arquivo importa db/mysql2/server: teste unitário NÃO pode acessar o banco');
    }
  }

  // Parte 2 — performance
  const base = path.join(RAIZ, 'resultados', login);
  const labels = ['busca-prefixo', 'busca-contem', 'inclusao'];
  verificarStatistics(path.join(base, 'E1'), 'E1', labels);
  verificarStatistics(path.join(base, 'E2'), 'E2', ['Total']);
  verificarStatistics(path.join(base, 'E3'), 'E3', labels);
  for (const f of ['explain-antes.txt', 'explain-depois.txt']) {
    if (fs.existsSync(path.join(base, 'E4', f))) ok(`E4/${f}`); else falta(`resultados/${login}/E4/${f}`);
  }
  verificarStatistics(path.join(base, 'E5'), 'E5', labels);
});
console.log('');
