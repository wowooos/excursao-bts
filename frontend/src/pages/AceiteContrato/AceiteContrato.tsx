// Corresponde ao frame "Aceite de contrato" no Figma.
// Coleta nome/CPF/email/telefone uma única vez e registra o aceite antes de criar a reserva.
import { useState } from 'react';
import { reservasService } from '../../services/reservas.service';

export function AceiteContrato({ excursaoId }: { excursaoId: string }) {
  const [aceitou, setAceitou] = useState(false);
  const [form, setForm] = useState({ nomeCompleto: '', cpf: '', email: '', telefone: '' });

  async function continuar() {
    const { initPoint } = await reservasService.criar({
      excursaoId,
      parcelas: 1, // o número real de parcelas é escolhido dentro do Checkout Pro
      cliente: form,
      contrato: { versao: '1.0', textoSnapshot: 'texto completo do contrato aqui' },
    });
    window.location.href = initPoint;
  }

  return (
    <div>
      <h1>aceite do contrato</h1>
      {/* inputs controlados de form aqui, batendo com o mockup do Figma */}
      <label>
        <input type="checkbox" checked={aceitou} onChange={(e) => setAceitou(e.target.checked)} />
        li e aceito os termos do contrato
      </label>
      <button disabled={!aceitou} onClick={continuar}>continuar para pagamento</button>
    </div>
  );
}
