// Distribui os cenários entre os integrantes: cada aluno recebe 5 cenários, em rodízio pela ordem de grupo.json.
// 5 integrantes -> CT01..CT25 | 4 -> CT01..CT20 | 3 -> CT01..CT15 | 2 -> CT01..CT10 | 1 -> CT01..CT05
const TOTAL_CTS = 25;
const POR_ALUNO = 5;
const TODOS_CTS = Array.from({ length: TOTAL_CTS }, (_, i) => `CT${String(i + 1).padStart(2, '0')}`);

function distribuirCTs(qtdIntegrantes) {
  const n = Math.max(1, Math.min(5, qtdIntegrantes));
  const mapa = Array.from({ length: n }, () => []);
  TODOS_CTS.slice(0, n * POR_ALUNO).forEach((ct, i) => mapa[i % n].push(ct));
  return mapa; // mapa[0] = CTs do integrante 1 (o líder), etc.
}

module.exports = { TODOS_CTS, POR_ALUNO, distribuirCTs };
