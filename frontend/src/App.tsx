import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/ui/Layout/Layout';
import { ListaExcursoes } from './pages/ListaExcursoes/ListaExcursoes';
import { DetalhesExcursao } from './pages/DetalhesExcursao/DetalhesExcursao';
import { AceiteContrato } from './pages/AceiteContrato/AceiteContrato';
import { Checkout } from './pages/Checkout/Checkout';
import { Confirmacao } from './pages/Confirmacao/Confirmacao';

const EXCURSAO_ID = '43d6a8ae-94a2-4f57-9ce2-d9962d2dabf7'; // no projeto real viria de rota ou config

export function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ListaExcursoes />} />
            <Route path="/excursoes/:id" element={<DetalhesExcursao />} />
            <Route path="/aceite-contrato" element={<AceiteContrato excursaoId={EXCURSAO_ID} />} />
            <Route path="/checkout/:reservaId" element={<Checkout reservaId="" />} />
            <Route path="/confirmacao/:reservaId" element={<Confirmacao reservaId="" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
