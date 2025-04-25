import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Registrar from "./pages/registrar";

export default function Navegation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registrar" element={<Registrar />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
