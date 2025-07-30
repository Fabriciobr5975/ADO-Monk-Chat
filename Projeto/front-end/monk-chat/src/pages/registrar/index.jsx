import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registrar() {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function registrar() {
    let body = {
      nm_usuario: nick,
      ds_email: email,
      ds_senha: senha,
      dt_criacao: new Date(),
    };

    axios.post("http://localhost:5001/usuario", body);
    sessionStorage.setItem("cliente", JSON.stringify(body));
    limpar();
    alert("Registro concluido!");
    navigate("/chat");
  }

  function limpar() {
    setNick("");
    setEmail("");
    setSenha("");
  }

  return (
    <div className="registro-app">
      <BarraLogo />

      <div className="registrar">
        <h3 className="titulo">Crie sua conta</h3>

        <div className="campos-entrada">
          <label className="info">Nick</label>
          <input
            type="text"
            placeholder="Insira seu nickname"
            className="input"
            onChange={(e) => setNick(e.target.value)}
          />
        </div>

        <div className="campos-entrada">
          <label className="info">Email</label>
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campos-entrada">
          <label className="info">Senha</label>
          <input
            type="password"
            placeholder="Insira sua senha"
            className="input"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="btn-criar" onClick={registrar}>
          Criar
        </button>

        <div className="possui-conta">
          <span>Já possui uma conta?</span>
          <span>
            Faça seu login clicando
            <Link to="/"> aqui.</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
