// CREATE TABLE reservas (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   cliente_id UUID NOT NULL REFERENCES clientes(id),
//   excursao_id UUID NOT NULL REFERENCES excursoes(id),
//   status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'confirmada', 'cancelada')),
//   parcelas INTEGER NOT NULL DEFAULT 1,
//   expira_em TIMESTAMPTZ NOT NULL,
//   created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
//   updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
// );

// CREATE INDEX idx_reservas_status_expira ON reservas(status, expira_em);

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE reservas (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      cliente_id UUID NOT NULL REFERENCES clientes(id),
      excursao_id UUID NOT NULL REFERENCES excursoes(id),
      status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'confirmada', 'cancelada')),
      parcelas INTEGER NOT NULL DEFAULT 1,
      expira_em TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX idx_reservas_status_expira ON reservas(status, expira_em);
  `);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE reservas;`);
};