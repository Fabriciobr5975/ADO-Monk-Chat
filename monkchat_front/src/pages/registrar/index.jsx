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
      dt_criacao: getCurrentDate(),
    };

    axios.post("http://localhost:5001/usuario", body);

    limpar();
    alert("Registro concluido!");
    navigate("/chat");
  }

  function getCurrentDate() {
    var nowDate = new Date();
    var month =
      (nowDate.getMonth() + 1).toString().length === 1
        ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;

    var day =
      nowDate.getDate().toString().length === 1
        ? "0" + nowDate.getDate()
        : +nowDate.getDate();

    var hour =
      nowDate.getHours().toString().length === 1
        ? "0" + nowDate.getHours()
        : +nowDate.getHours();

    var minute =
      nowDate.getMinutes().toString().length === 1
        ? "0" + nowDate.getMinutes()
        : +nowDate.getMinutes();

    var seconds =
      nowDate.getSeconds().toString().length === 1
        ? "0" + nowDate.getSeconds()
        : +nowDate.getSeconds();

    return (
      nowDate.getFullYear() +
      "-" +
      month +
      "-" +
      day +
      " " +
      hour +
      ":" +
      minute +
      ":" +
      seconds
    );
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

        <button className="btn-criar" onClick={registrar}>
          Criar
        </button>

        <label className="possui-conta">
          Já possui uma conta? Faça seu login clicando<Link to="/"> aqui.</Link>{" "}
        </label>
      </div>
    </div>
  );
}
