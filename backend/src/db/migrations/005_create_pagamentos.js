// CREATE TABLE pagamentos (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   reserva_id UUID NOT NULL REFERENCES reservas(id),
//   mp_payment_id TEXT,
//   valor_centavos INTEGER NOT NULL,
//   status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'rejeitado')),
//   metodo TEXT,
//   created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
//   updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
// );

// CREATE INDEX idx_pagamentos_reserva ON pagamentos(reserva_id);

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE pagamentos (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      reserva_id UUID NOT NULL REFERENCES reservas(id),
      mp_payment_id TEXT,
      valor_centavos INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'rejeitado')),
      metodo TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    CREATE INDEX idx_pagamentos_reserva ON pagamentos(reserva_id);
  `);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE pagamentos;`);
};