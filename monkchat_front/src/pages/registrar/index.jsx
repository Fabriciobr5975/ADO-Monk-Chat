import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import { Link } from "react-router-dom";

function App() {
  async function registrar() {}

  return (
    <div className="registro-app">
      <BarraLogo />

      <div className="registrar">
        <label className="titulo">Crie sua conta</label>

        <label className="info">Nick</label>
        <input
          type="text"
          placeholder="Insira seu nickname"
          className="input"
        />

        <label className="info">Email</label>
        <input type="email" placeholder="Insira seu e-mail" className="input" />

        <label className="info">Senha</label>
        <input
          type="password"
          placeholder="Insira seu e-mail"
          className="input"
        />

        <button className="btn-criar">Criar</button>

        <label className="possui-conta">
          Já possui uma conta? Faça seu login clicando<Link to="/"> aqui.</Link>{" "}
        </label>
      </div>
    </div>
  );
}

export default App;
