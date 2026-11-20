const request = require('supertest');
const { criarApp } = require('../src/app');
const { validarDados, validarId } = require('../src/regras');

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

test('CT01 deve rejeitar um modo de busca inexistente', async () => {
  const repo = criarRepoMock();
  repo.buscarPorNome.mockResolvedValue([]);
  const app = criarApp(repo);

  const res = await request(app).get('/clientes').query({ nome: 'Ab', modo: 'exato' });

  expect(res.status).toBe(400);
  expect(res.body).toEqual({ erro: 'Modo de busca inválido. Use: prefixo ou contem' });
  expect(repo.buscarPorNome).not.toHaveBeenCalled();
});

test('CT04 deve devolver 404 para PATCH de cliente', async () => {
  const repo = criarRepoMock();
  const app = criarApp(repo);
  const corpo = { nome: 'Ana Souza', email: 'ana@email.com', categoriaId: 1 };

  const res = await request(app).patch('/clientes/1').send(corpo);

  expect(res.status).toBe(404);
  expect(res.body).toEqual({ erro: 'Rota não encontrada' });
  expect(repo.atualizar).not.toHaveBeenCalled();
});

test('CT07 deve rejeitar id vazio ou nulo', () => {
  expect(() => validarId('')).toThrow(/^ID inválido$/);
  expect(() => validarId(null)).toThrow(/^ID inválido$/);
});

test('CT10 deve consultar o email normalizado ao atualizar um cliente', async () => {
  const repo = criarRepoMock();
  const app = criarApp(repo);
  const corpo = { nome: 'Ana Souza', email: 'ANA@Email.com', categoriaId: 1 };
  const clienteNormalizado = { nome: 'Ana Souza', email: 'ana@email.com', categoriaId: 1 };

  repo.buscarPorId.mockResolvedValue({ id: 4, ...clienteNormalizado });
  repo.categoriaExiste.mockResolvedValue(true);
  repo.buscarPorEmail.mockResolvedValue({ id: 4, email: 'ana@email.com' });
  repo.atualizar.mockResolvedValue(true);

  const res = await request(app).put('/clientes/4').send(corpo);

  expect(res.status).toBe(200);
  expect(res.body).toEqual({ id: 4, ...clienteNormalizado });
  expect(repo.buscarPorId).toHaveBeenCalledWith(4);
  expect(repo.categoriaExiste).toHaveBeenCalledWith(1);
  expect(repo.buscarPorEmail).toHaveBeenCalledTimes(1);
  expect(repo.buscarPorEmail).toHaveBeenCalledWith('ana@email.com');
  expect(repo.atualizar).toHaveBeenCalledTimes(1);
  expect(repo.atualizar).toHaveBeenCalledWith(4, clienteNormalizado);
});

test('CT13 deve contar o tamanho do nome sem os espaços das pontas', () => {
  const dados = { nome: '  AA  ', email: 'ana@email.com', categoriaId: 1 };

  expect(() => validarDados(dados)).toThrow(/^Campo nome\b/);
});
