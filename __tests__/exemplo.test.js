// =====================================================================================
// EXEMPLO de testes unitários — use como modelo. Ele NÃO conta como cenário do trabalho.
// Rode com:  npm test      (deve mostrar 5 passed)
//
// A aplicação tem três partes:
//   src/regras.js      -> regras de negócio em FUNÇÕES PURAS (recebem valores, devolvem valores)
//   src/app.js         -> rotas HTTP: usam as regras e chamam o repository
//   src/repository.js  -> SQL no MySQL
//
// Por isso existem DOIS tipos de teste unitário neste trabalho:
//   1) Teste de REGRA: chama a função de src/regras.js direto. Não precisa de mock nem de HTTP.
//   2) Teste de ROTA:  faz uma requisição ao app com um repository FALSO (mock).
//      Confere se a rota usa as regras certo e se chama (ou NÃO chama) o banco como deveria.
//
// Todo teste segue 3 passos (padrão AAA):
//   1) Preparar (Arrange)  2) Agir (Act)  3) Conferir (Assert)
// =====================================================================================

// require = "importar" um módulo (equivale ao import do Java).
const request = require('supertest');                             // faz requisições HTTP ao app sem abrir porta
const { criarApp } = require('../src/app');                       // monta o app recebendo um repository
const { validarId, montarPadrao } = require('../src/regras');     // funções puras de regra

// =====================================================================================
// 1) TESTES DE REGRA — o tipo mais simples: entra um valor, sai um valor (ou um erro).
// =====================================================================================
describe('Exemplos — regras (funções puras)', () => {
  test('validarId deve converter o texto "7" para o número 7', () => {
    // 2) Agir — não há nada para preparar: é só chamar a função
    const id = validarId('7');

    // 3) Conferir
    expect(id).toBe(7);               // toBe: compara valores simples (7 número, não "7" texto)
  });

  test('montarPadrao deve recusar um modo de busca que não existe', () => {
    // Para conferir que uma função LANÇA erro, coloque a chamada dentro de () => ...
    // Assim o Jest executa a função e "pega" o erro. Sem o () =>, o erro estoura antes do expect.
    expect(() => montarPadrao('Ab', 'qualquer')).toThrow('Modo de busca inválido');
  });
});

// =====================================================================================
// 2) TESTES DE ROTA — o app é de VERDADE e o repository é FALSO (mock).
// =====================================================================================

// Cria um repository FALSO com os mesmos métodos do repository de verdade (src/repository.js).
// jest.fn() cria uma função "dublê": ela não faz nada sozinha, mas
//   - você escolhe o que ela devolve (mockResolvedValue / mockRejectedValue)
//   - ela anota cada chamada, para conferir depois (toHaveBeenCalledWith, not.toHaveBeenCalled)
// É uma função para que CADA teste receba mocks novos, sem "sujeira" de outro teste.
function criarRepoMock() {
  return {
    listarCategorias: jest.fn(),
    categoriaExiste: jest.fn(),
    buscarPorNome: jest.fn(),
    buscarPorId: jest.fn(),
    buscarPorEmail: jest.fn(),
    inserir: jest.fn(),
    atualizar: jest.fn(),
    excluir: jest.fn(),
  };
}

describe('Exemplos — rotas (repository falso)', () => {
  // "async" porque a requisição demora: usamos await para esperar a resposta.
  test('GET /clientes/1 deve responder 200 com o registro encontrado', async () => {
    // 1) Preparar
    const repo = criarRepoMock();
    // mockResolvedValue(x): quando o app chamar repo.buscarPorId(...), recebe x.
    // É como se o banco tivesse encontrado este registro.
    repo.buscarPorId.mockResolvedValue({ id: 1, nome: 'Ana Souza' });
    const app = criarApp(repo); // app de VERDADE usando o repository FALSO

    // 2) Agir — supertest "finge" um GET na rota
    const res = await request(app).get('/clientes/1');

    // 3) Conferir
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, nome: 'Ana Souza' });   // toEqual: compara o CONTEÚDO de objetos
    expect(repo.buscarPorId).toHaveBeenCalledWith(1);             // na URL o id é texto ('1'); o app converte para número
  });

  test('GET /categorias deve responder 200 com a lista vinda do repository', async () => {
    const repo = criarRepoMock();
    repo.listarCategorias.mockResolvedValue([{ id: 1, nome: 'Ouro' }]);
    const app = criarApp(repo);

    const res = await request(app).get('/categorias');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, nome: 'Ouro' }]);
  });

  // ---------------------------------------------------------------------------------
  // COMO CRIAR UM TESTE DE ROTA NOVO — situação que NÃO está na lista do trabalho.
  // O categoriaId chega como TEXTO ("1") em vez de número: a rota deve responder 400
  // e NADA pode ser gravado.
  // ---------------------------------------------------------------------------------
  test('POST /clientes deve responder 400 quando categoriaId vem como texto', async () => {
    // 1) Preparar — não precisa de mockResolvedValue: o banco não deve ser usado
    const repo = criarRepoMock();
    const app = criarApp(repo);
    const corpo = { nome: 'Ana Souza', email: 'ANA@Email.com', categoriaId: '1' };

    // 2) Agir — .post(url).send(objeto) envia o objeto como JSON no corpo da requisição
    const res = await request(app).post('/clientes').send(corpo);

    // 3) Conferir — status, mensagem e que NADA foi gravado
    expect(res.status).toBe(400);
    expect(res.body.erro).toContain('categoriaId');          // toContain: a mensagem cita o campo com problema
    expect(repo.inserir).not.toHaveBeenCalled();
  });
});
