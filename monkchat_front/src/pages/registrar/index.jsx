import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
          onChange={(e) => setNick(e.target.value)}
        />

        <label className="info">Email</label>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="info">Senha</label>
        <input
          type="password"
          placeholder="Insira seu e-mail"
          className="input"
          onChange={(e) => setSenha(e.target.value)}
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
