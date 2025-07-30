import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function buscarUsuario() {
    let resp = await axios.get(
      `http://localhost:5001/usuario/dados?email=${email}&senha=${senha}`
    );

    const UsuarioValido = resp.data.find(
      (usuario) => usuario.DS_EMAIL === email && usuario.DS_SENHA === senha
    );

    if (UsuarioValido) {
      sessionStorage.setItem("cliente", JSON.stringify(UsuarioValido));
      navigate("/chat");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <div className="pagina-app">
      <BarraLogo />

      <div className="login">
        <h3 className="titulo">Faça seu login</h3>

        <div className="campos-entrada">
          <label className="info">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu e-mail"
            className="input"
          />
        </div>

        <div className="campos-entrada">
          <label className="info">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            className="input"
          />
        </div>

        <button className="btn-login" onClick={buscarUsuario}>
          Login
        </button>

        <div className="criar-conta">
          <span>Não possui uma conta?</span>
          <span>
            Crie uma agora clicando
            <Link to="/registrar"> aqui.</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
