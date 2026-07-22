CREATE TABLE excursoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  data_evento DATE NOT NULL,
  valor_centavos INTEGER NOT NULL,
  vagas_totais INTEGER NOT NULL,
  vagas_disponiveis INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
