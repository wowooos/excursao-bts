// Corresponde ao frame "Checkout" no Figma.
// Essa tela é só uma ponte: o pagamento real acontece na página do Mercado Pago.
import { reservasService } from '../../services/reservas.service';

export function Checkout({ reservaId }: { reservaId: string }) {
  async function tentarNovamente() {
    const { initPoint } = await reservasService.tentarNovamente(reservaId);
    window.location.href = initPoint;
  }

  return (
    <div>
      <h1>pagamento</h1>
      <p>você será redirecionado para o Mercado Pago</p>
      <button onClick={tentarNovamente}>ir para pagamento</button>
    </div>
  );
}
