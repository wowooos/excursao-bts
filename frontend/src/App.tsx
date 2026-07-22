import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { AceiteContrato } from './pages/AceiteContrato/AceiteContrato';
import { Checkout } from './pages/Checkout/Checkout';
import { Confirmacao } from './pages/Confirmacao/Confirmacao';

const EXCURSAO_ID = 'id-da-excursao-do-bts'; // no projeto real viria de rota ou config

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing excursaoId={EXCURSAO_ID} />} />
        <Route path="/aceite-contrato" element={<AceiteContrato excursaoId={EXCURSAO_ID} />} />
        <Route path="/checkout/:reservaId" element={<Checkout reservaId="" />} />
        <Route path="/confirmacao/:reservaId" element={<Confirmacao reservaId="" />} />
      </Routes>
    </BrowserRouter>
  );
}
