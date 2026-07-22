// CREATE TABLE clientes (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   nome_completo TEXT NOT NULL,
//   cpf VARCHAR(11) NOT NULL UNIQUE,
//   email TEXT NOT NULL,
//   telefone TEXT NOT NULL,
//   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
// );

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE clientes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      nome_completo TEXT NOT NULL,
      cpf VARCHAR(11) NOT NULL UNIQUE,
      email TEXT NOT NULL,
      telefone TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE clientes;`);
};