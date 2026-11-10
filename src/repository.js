// Camada de acesso a dados: só SQL, sem regra de negócio.
// Nos testes unitários esta camada deve ser substituída por um mock.

const SELECT_BASE = `
  SELECT t.id, t.nome AS nome, t.email AS email, t.categoria_id AS categoriaId, a.nome AS categoria, t.criado_em AS criadoEm
  FROM clientes t
  JOIN categorias a ON a.id = t.categoria_id`;

function criarRepository(pool) {
  return {
    async listarCategorias() {
      const [rows] = await pool.query('SELECT id, nome FROM categorias ORDER BY id');
      return rows;
    },

    async categoriaExiste(id) {
      const [rows] = await pool.query('SELECT 1 FROM categorias WHERE id = ?', [id]);
      return rows.length > 0;
    },

    // padrao: string usada no LIKE (ex.: "Ab%" ou "%Ab%")
    async buscarPorNome(padrao, limite) {
      const [rows] = await pool.query(
        `${SELECT_BASE} WHERE t.nome LIKE ? ORDER BY t.nome LIMIT ?`,
        [padrao, limite]
      );
      return rows;
    },

    async buscarPorId(id) {
      const [rows] = await pool.query(`${SELECT_BASE} WHERE t.id = ?`, [id]);
      return rows[0] || null;
    },

    async buscarPorEmail(email) {
      const [rows] = await pool.query('SELECT id, email AS email FROM clientes WHERE email = ?', [email]);
      return rows[0] || null;
    },

    async inserir({ nome, email, categoriaId }) {
      const [res] = await pool.query(
        'INSERT INTO clientes (nome, email, categoria_id) VALUES (?, ?, ?)',
        [nome, email, categoriaId]
      );
      return res.insertId;
    },

    async atualizar(id, { nome, email, categoriaId }) {
      const [res] = await pool.query(
        'UPDATE clientes SET nome = ?, email = ?, categoria_id = ? WHERE id = ?',
        [nome, email, categoriaId, id]
      );
      return res.affectedRows > 0;
    },

    async excluir(id) {
      const [res] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
      return res.affectedRows > 0;
    },
  };
}

module.exports = { criarRepository };
