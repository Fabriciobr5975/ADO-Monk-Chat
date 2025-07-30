import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AlterarConta() {
  const usuario = JSON.parse(sessionStorage.getItem("cliente")) || {};
  const navigate = useNavigate();

  console.log(usuario)

  const [novaSenha, setNovaSenha] = useState(usuario.senha ?? "");
  const [nick, setNick] = useState("");

  async function alterarUsuario() {
    const body = {
      nm_usuario: nick,
      ds_email: usuario.DS_EMAIL,
      ds_senha: novaSenha,
    };

    let resp = await axios.put(
      `http://localhost:5001/usuario/${usuario.ID_USUARIO}`,
      body
    );

    if (resp.data.resposta >= 1) {
      alert(`O usuário foi alterado com sucesso`);
      sessionStorage.setItem("cliente", JSON.stringify(body));
      navigate("/chat");
    } else {
      alert(`O usuário não foi alterado`);
    }
  }

  return (
    <div className="alterar-app">
      <BarraLogo />

      <div className="alterar">
        <label className="titulo">Alterar conta</label>

        <div className="campos-entrada">
          <label className="info">Email</label>
          <input
            type="email"
            value={usuario.ds_email}
            placeholder="Insira seu e-mail"
            className="input"
            readOnly
          />
        </div>

        <div className="campos-entrada">
          <label className="info">Senha</label>
          <input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            placeholder="Insira sua senha"
            className="input"
          />
        </div>

        <div className="campos-entrada">
          <label className="info">Nick</label>
          <input
            type="text"
            placeholder="Insira seu nickname"
            className="input"
            onChange={(e) => setNick(e.target.value)}
          />
        </div>

        <button className="btn-alterar" onClick={() => alterarUsuario()}>
          Alterar
        </button>
      </div>
    </div>
  );
}
