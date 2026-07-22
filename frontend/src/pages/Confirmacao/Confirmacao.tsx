// Corresponde ao frame "Confirmação" no Figma.
// O status real vem do webhook — essa tela só reflete o que já está confirmado no banco.
export function Confirmacao({ reservaId }: { reservaId: string }) {
  return (
    <div>
      <h1>reserva confirmada!</h1>
      <p>seu pagamento foi aprovado e sua vaga está garantida</p>
      <a href="https://wa.me/SEUNUMERO">entrar no grupo do whatsapp</a>
    </div>
  );
}
