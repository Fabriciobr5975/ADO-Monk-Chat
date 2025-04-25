import "./App.scss";
import BarraLogo from "../../components/barra-logo";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="pagina-app">
      <BarraLogo />

      <div className="login">
        <label className="titulo">Faça seu login</label>

        <label className="info">Email</label>

        <input type="email" placeholder="Insira seu e-mail" className="input" />

        <label className="info">Senha</label>
        <input
          type="password"
          placeholder="Insira seu e-mail"
          className="input"
        />

        <button className="btn-login">Login</button>

        <label className="criar-conta">
          Não possui uma conta? Crie uma agora clicando{" "}
          <Link to="/registrar">aqui.</Link>{" "}
        </label>
      </div>
    </div>
  );
}

export default App;
