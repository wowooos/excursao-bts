CREATE TABLE contrato_aceites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reserva_id UUID NOT NULL UNIQUE REFERENCES reservas(id),
  versao_contrato TEXT NOT NULL,
  texto_snapshot TEXT NOT NULL,
  aceito_em TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_aceite TEXT NOT NULL
);
