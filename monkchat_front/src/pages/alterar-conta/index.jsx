import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="alterar-app">
      <BarraLogo />

      <div className="alterar">
        <label className="titulo">Alterar conta</label>

        <label className="info">Email</label>
        <input type="email" placeholder="Insira seu e-mail" className="input" />

        <label className="info">Senha</label>
        <input
          type="password"
          placeholder="Insira seu e-mail"
          className="input"
        />

        <label className="info">Nick</label>
        <input
          type="text"
          placeholder="Insira seu nickname"
          className="input"
        />

        <button className="btn-alterar">Alterar</button>
      </div>
    </div>
  );
}

export default App;
