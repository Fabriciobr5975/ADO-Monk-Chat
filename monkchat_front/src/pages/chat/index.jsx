import "./index.scss";
import logoMonk from "../../assets/images/logo_monk.png";
import line from "../../assets/images/Line 1.png";
import atualizar from "../../assets/images/Botao Atualizar.png";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/remove.svg";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const usuario = JSON.parse(sessionStorage.getItem("cliente")) || {};

  const navigate = useNavigate();

  const [nick, setNick] = useState("");
  const [sala, setSala] = useState("");
  const [dest, setDest] = useState("");
  const [texto, setTexto] = useState("");
  const [listaMensagem, setListaMensagem] = useState([]);

  const [mensagem, setMensagem] = useState([
    {
      id_usuario_envio: 0,
      id_usuario_para: 0,
      id_sala: 0,
      ds_mensagem: "",
      dt_mensagem: getCurrentDate(),
    },
  ]);

  function getCurrentDate() {
    let nowDate = new Date();
    let month =
      (nowDate.getMonth() + 1).toString().length === 1
        ? "0" + (nowDate.getMonth() + 1)
        : nowDate.getMonth() + 1;

    let day =
      nowDate.getDate().toString().length === 1
        ? "0" + nowDate.getDate()
        : +nowDate.getDate();

    let hour =
      nowDate.getHours().toString().length === 1
        ? "0" + nowDate.getHours()
        : +nowDate.getHours();

    let minute =
      nowDate.getMinutes().toString().length === 1
        ? "0" + nowDate.getMinutes()
        : +nowDate.getMinutes();

    let seconds =
      nowDate.getSeconds().toString().length === 1
        ? "0" + nowDate.getSeconds()
        : +nowDate.getSeconds();

    return month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
  }

  async function Deletar(idMensagem) {
    try {
      const url = `http://localhost:5001/mensagem/${idMensagem}`;
      await axios.delete(url);

      alert("Mensagem removida com sucesso!");

      Listar();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao remover a mensagem");
    }
  }

  async function Alterar(idMensagem) {
    try {
      setMensagem({
        ...mensagem,
         id_usuario_envio: usuario.ID_USUARIO,
        id_usuario_para: 2,
        id_sala: 7,
        ds_mensagem: texto,
        dt_mensagem: "2025-05-18",
      });

      const url = `http://localhost:5001/mensagem/${idMensagem}`;
      await axios.put(url, mensagem);

      alert("Mensagem alterada com sucesso!");

      Listar();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao alterar a mensagem");
    }
  }

  const Listar = useCallback(async () => {
    try {
      const url = "http://localhost:5001/mensagem/7";
      const respo = await axios.get(url);

      setListaMensagem([...respo.data]);
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao buscar as mensagens");
    }
  }, [listaMensagem]);

  useEffect(() => {
    Listar();
  }, []);

  async function Enviar() {
    try {
      setMensagem({
        ...mensagem,
        id_usuario_envio: usuario.ID_USUARIO,
        id_usuario_para: 2,
        id_sala: 7,
        ds_mensagem: texto,
        dt_mensagem: "2025-05-18",
      });

      const url = "http://localhost:5001/mensagem";
      await axios.post(url, mensagem);
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao enviar a mensagem");
    }
  }

  async function Criar() {
    try {
      let body = {
        id_usuario: usuario.ID_USUARIO,
        nm_sala: sala,
      };

      const url = "http://localhost:5001/sala";
      await axios.post(url, body);

      alert("Sala criada");
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }

  async function Entrar() {
    try {
      await axios.get(`http://localhost:5001/sala/${sala}`);

      alert("Entrou na sala");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao entrar na sala");
    }
  }

  return (
    <main>
      <header>
        <div className="logo">
          <div className="logo_monk">
            <img src={logoMonk} alt="logo_monk" />
            <img src={line} alt="" />
          </div>
        </div>
        <label className="logo-txt"> MonkChat</label>
        <label className="conta">
          <h5 onClick={() => navigate("/alterar")}>Minha Conta</h5>
        </label>
      </header>

      <section className="conteudo">
        <div className="container">
          <div className="input">
            <div className="dados">
              <div className="insercao-dados">
                Sala:
                <input type="text" onChange={(e) => setSala(e.target.value)} />
              </div>
              <div className="insercao-dados">
                Nick:
                <input type="text" onChange={(e) => setNick(e.target.value)} />
              </div>
              <div className="insercao-dados">
                Para:
                <input type="text" onChange={(e) => setDest(e.target.value)} />
              </div>
              <div className="insercao-dados">
                <label></label>
                <div>
                  <input type="button" value="Criar" onClick={() => Criar()} />
                  <input type="button" value="Entrar" onClick={Entrar} />
                </div>
              </div>
            </div>
            <div className="mensagem">
              Mensagem:
              <textarea
                name="areatexto"
                id=""
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              ></textarea>
              <input type="button" value="Enviar" onClick={() => Enviar()} />
            </div>
          </div>
          <div className="chat">
            <div className="atualizar">
              <div>
                <img src={atualizar} alt="" onClick={() => Listar()} />
              </div>
            </div>
            <div className="areadochat">
              {listaMensagem.map((item, index) => (
                <div className="mensagemnochat" key={index}>
                  <div>
                    ({item.DT_MENSAGEM}) <strong>{item.NM_USUARIO}</strong> fala
                    para <strong>{item.DESTINATARIO ?? "Todos"}</strong>:{" "}
                    {item.DS_MENSAGEM}
                  </div>
                  <div className="edit-remove">
                    <img
                      src={edit}
                      alt=""
                      onClick={() => Alterar(item.ID_MENSAGEM)}
                    />
                    <img
                      src={remove}
                      alt=""
                      onClick={() => Deletar(item.ID_MENSAGEM)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
