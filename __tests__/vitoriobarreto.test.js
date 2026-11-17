const request = require('supertest');
const { criarApp } = require('../src/app');
const { validarLimite } = require('../src/regras');

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

// CT03 — Rota GET /clientes
test('CT03 deve converter limite em texto para número na busca por nome', async () => {
    const repo = criarRepoMock();
    const app = criarApp(repo);
    repo.buscarPorNome.mockResolvedValue([]);

    const res = await request(app).get('/clientes?nome=Ab&limite=5');

    expect(res.status).toBe(200);
    expect(repo.buscarPorNome).toHaveBeenCalledWith('Ab%', 5);
});

// CT06 — Regra validarLimite
test('CT06 deve aceitar os valores extremos 1 e 100 em validarLimite', () => {
    expect(validarLimite(1)).toBe(1);
    expect(validarLimite(100)).toBe(100);
});

// CT09 — Rota PUT /clientes/:id
test('CT09 deve responder 400 e não chamar o banco quando ID for inválido no PUT', async () => {
    const repo = criarRepoMock();
    const app = criarApp(repo);
    const corpoValido = { nome: 'Ana Souza', email: 'ana@email.com', categoriaId: 1 };

    const res = await request(app).put('/clientes/abc').send(corpoValido);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ erro: 'ID inválido' });
    expect(repo.buscarPorId).not.toHaveBeenCalled();
    expect(repo.atualizar).not.toHaveBeenCalled();
});

// CT12 — Rota POST /clientes
test('CT12 deve retornar 201 com nome limpo e email normalizado ao incluir cliente', async () => {
    const repo = criarRepoMock();
    const app = criarApp(repo);

    repo.categoriaExiste.mockResolvedValue(true);
    repo.buscarPorEmail.mockResolvedValue(null);
    repo.inserir.mockResolvedValue(15);

    const corpo = {
        nome: '  Ana Souza  ',
        email: 'ANA@Email.com',
        categoriaId: 1,
    };

    const res = await request(app).post('/clientes').send(corpo);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({
        id: 15,
        nome: 'Ana Souza',
        email: 'ana@email.com',
        categoriaId: 1,
    });
    expect(repo.inserir).toHaveBeenCalledWith({
        nome: 'Ana Souza',
        email: 'ana@email.com',
        categoriaId: 1,
    });
});

// CT15 — Rota DELETE /clientes/:id
test('CT15 deve responder 500 com Erro interno quando repo.excluir falhar', async () => {
    const repo = criarRepoMock();
    const app = criarApp(repo);

    repo.excluir.mockRejectedValue(new Error('timeout na conexão'));

    const res = await request(app).delete('/clientes/4');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ erro: 'Erro interno' });
});