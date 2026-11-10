// Regras de negócio em FUNÇÕES PURAS: recebem valores e devolvem valores (ou lançam ErroNegocio).
// Não acessam banco nem HTTP. Por isso são testadas diretamente, sem mock.
const { ErroNegocio } = require('./erros');

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_TEXTO = 3;
const MAX_TEXTO = 100;
const MODOS_BUSCA = ['prefixo', 'contem'];
const LIMITE_PADRAO = 20;
const LIMITE_MAXIMO = 100;

// "7" -> 7. Lança 400 se não for um inteiro positivo.
function validarId(id) {
  const n = Number(id);
  if (!Number.isInteger(n) || n <= 0) throw new ErroNegocio(400, 'ID inválido');
  return n;
}

// Regra de formato: email válido
function normalizarEmail(valor) {
  return valor.trim().toLowerCase();
}

// Confere os 3 campos. Devolve os dados prontos para gravar (texto sem espaços nas pontas, email normalizado)
// ou lança 400 com TODOS os problemas encontrados na mensagem.
function validarDados(dados) {
  const { nome, email, categoriaId } = dados || {};
  const erros = [];

  if (typeof nome !== 'string' || nome.trim().length < MIN_TEXTO || nome.trim().length > MAX_TEXTO) {
    erros.push(`Campo nome deve ter entre ${MIN_TEXTO} e ${MAX_TEXTO} caracteres`);
  }
  const emailNormalizado = typeof email === 'string' ? normalizarEmail(email) : '';
  if (!REGEX_EMAIL.test(emailNormalizado)) {
    erros.push('Campo email inválido');
  }
  if (!Number.isInteger(categoriaId) || categoriaId <= 0) {
    erros.push('Campo categoriaId deve ser um inteiro positivo');
  }
  if (erros.length > 0) throw new ErroNegocio(400, erros.join('; '));

  return { nome: nome.trim(), email: emailNormalizado, categoriaId };
}

// Monta o padrão do LIKE: prefixo -> "Ab%", contem -> "%Ab%". Lança 400 se o modo não existir.
function montarPadrao(termo, modo) {
  if (!MODOS_BUSCA.includes(modo)) {
    throw new ErroNegocio(400, `Modo de busca inválido. Use: ${MODOS_BUSCA.join(' ou ')}`);
  }
  const t = String(termo).trim();
  return modo === 'prefixo' ? `${t}%` : `%${t}%`;
}

// "10" -> 10. Lança 400 se não for inteiro entre 1 e LIMITE_MAXIMO.
function validarLimite(limite) {
  const lim = Number(limite);
  if (!Number.isInteger(lim) || lim < 1 || lim > LIMITE_MAXIMO) {
    throw new ErroNegocio(400, `Limite deve ser um inteiro entre 1 e ${LIMITE_MAXIMO}`);
  }
  return lim;
}

module.exports = {
  validarId, normalizarEmail, validarDados, montarPadrao, validarLimite,
  MIN_TEXTO, MAX_TEXTO, LIMITE_PADRAO, LIMITE_MAXIMO,
};
