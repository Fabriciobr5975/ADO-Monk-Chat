import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Registrar from "./pages/registrar";
import AlterarConta from "./pages/alterar-conta";

export default function Navegation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/alterar" element={<AlterarConta />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
