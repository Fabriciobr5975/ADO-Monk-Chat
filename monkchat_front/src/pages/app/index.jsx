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
    try {
      let resp = await axios.get(
        `http://localhost:5001/usuario/dados?email=${email}&senha=${senha}`
      );

      const UsuarioValido = resp.data.find(
        (usuario) => usuario.DS_EMAIL === email && usuario.DS_SENHA === senha
      );

      if (UsuarioValido) {
        navigate("/alterar");
      } else {
        alert("Usuário ou senha inválidos");
      }
    } catch (err) {}
  }

  return (
    <div className="pagina-app">
      <BarraLogo />

      <div className="login">
        <label className="titulo">Faça seu login</label>

        <label className="info">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Insira seu e-mail"
          className="input"
        />

        <label className="info">Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Insira seu e-mail"
          className="input"
        />

        <button className="btn-login" onClick={buscarUsuario}>
          Login
        </button>

        <label className="criar-conta">
          Não possui uma conta? Crie uma agora clicando{" "}
          <Link to="/registrar">aqui.</Link>{" "}
        </label>
      </div>
    </div>
  );
}
