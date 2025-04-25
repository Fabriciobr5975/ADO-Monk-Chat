import "./index.scss";
import BarraLogo from "../../components/barra-logo";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AlterarConta() {
  const location = useLocation();
  const { id, email, senha } = location.state || {};
  const [novaSenha, setNovaSenha] = useState(senha);
  const [nick, setNick] = useState("");

  async function alterarUsuario() {
    const body = {
      nm_usuario: nick,
      ds_email: email,
      ds_senha: novaSenha,
    };

    let resp = await axios.put(`http://localhost:5001/usuario/${id}`, body);

    if (resp.data.resposta >= 1) {
      alert(`O usuário foi alterado com sucesso`);
    
    } else {
      alert(`O usuário não foi alterado`)
    }
  }

  return (
    <div className="alterar-app">
      <BarraLogo />

      <div className="alterar">
        <label className="titulo">Alterar conta</label>

        <label className="info">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Insira seu e-mail"
          className="input"
          readOnly
        />

        <label className="info">Senha</label>
        <input
          type="password"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          placeholder="Insira seu e-mail"
          className="input"
        />

        <label className="info" value={nick}>
          Nick
        </label>
        <input
          type="text"
          placeholder="Insira seu nickname"
          className="input"
          onChange={(e) => setNick(e.target.value)}
        />

        <button className="btn-alterar" onClick={alterarUsuario}>
          Alterar
        </button>
      </div>
    </div>
  );
}
