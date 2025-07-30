import "./index.scss";
import logoMonk from "../../assets/images/logo_monk.png";
import line from "../../assets/images/Line 1.png";
import atualizar from "../../assets/images/botao-atualizar.svg";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/remove.svg";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const usuario = JSON.parse(sessionStorage.getItem("cliente")) || {};

  const navigate = useNavigate();
  const [sala, setSala] = useState("");
  const [dest, setDest] = useState(0);
  const [listaMensagem, setListaMensagem] = useState([]);
  const [mensagemPadrao, setMensagemPadrao] = useState("");

  const [numeroSala, setNumeroSala] = useState(0);

  const [mensagem, setMensagem] = useState([
    {
      id_mensagem: 0,
      id_usuario_envio: usuario.ID_USUARIO,
      id_usuario_para: usuario.ID_USUARIO,
      id_sala: numeroSala,
      ds_mensagem: "",
      dt_mensagem: new Date(),
    },
  ]);

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

  const salvarMensagem = async () => {
    try {
      if (mensagem.id_mensagem === 0) {
        await enviar();
      } else {
        await Alterar();
      }

      Listar();
      limparMensagem();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao salvar a mensagem");
    }
  };

  async function Alterar() {
    try {
      const url = `http://localhost:5001/mensagem/${mensagem.id_mensagem}`;
      await axios.put(url, mensagem);

      alert("Mensagem alterada com sucesso!");

      Listar();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao alterar a mensagem");
    }
  }

  const Listar = useCallback(async () => {
    try {
      const url = `http://localhost:5001/mensagem/sala/${numeroSala}`;
      const resp = await axios.get(url);

      setListaMensagem([...resp.data]);
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao buscar as mensagens");
    }
  }, [numeroSala]);

  useEffect(() => {
    Listar();
  }, [Listar]);

  const enviar = async () => {
    try {
      setMensagem({
        ...mensagem,
        id_usuario_para: usuario.ID_USUARIO,
        id_sala: numeroSala,
        dt_mensagem: new Date(),
      });

      const url = "http://localhost:5001/mensagem";
      await axios.post(url, mensagem);
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao enviar a mensagem");
    }
  };

  async function Criar() {
    try {
      let body = {
        id_usuario: usuario.ID_USUARIO,
        nm_sala: sala,
      };

      const url = "http://localhost:5001/sala";
      const resp = await axios.post(url, body);

      setNumeroSala(resp.data.resposta);

      alert("Sala criada");
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }

  async function Entrar() {
    try {
      await axios
        .get(`http://localhost:5001/sala/${sala}`)
        .then(alert("Entrou na sala"));

        setNumeroSala(sala);
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao entrar na sala");
    }
  }

  const limparMensagem = () => {
    setMensagem({
      id_mensagem: 0,
      id_usuario_envio: usuario.ID_USUARIO,
      id_usuario_para: usuario.ID_USUARIO,
      id_sala: numeroSala,
      ds_mensagem: "",
      dt_mensagem: new Date(),
    });
  };

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
                <input
                  type="text"
                  value={sala}
                  onChange={(e) => setSala(e.target.value)}
                />
              </div>
              <div className="insercao-dados">
                Nick:
                <input type="text" value={usuario.nm_usuario} readOnly />
              </div>
              <div className="insercao-dados">
                Para:
                <select value={dest} onChange={(e) => setDest(e.target.value)}>
                  <option selected value={0}>
                    Todos
                  </option>

                  {listaMensagem.map(
                    (item, index) =>
                      item.DESTINATARIO !== item.NM_USUARIO && (
                        <option
                          value={item.ID_USUARIO_PARA}
                          key={item.ID_USUARIO_PARA}
                        >
                          {item.DESTINATARIO}
                        </option>
                      )
                  )}
                </select>
              </div>
              <div className="insercao-dados">
                <div className="botoes">
                  <input type="button" value="Criar" onClick={() => Criar()} />
                  <input type="button" value="Entrar" onClick={Entrar} />
                </div>
              </div>
            </div>
            <div className="mensagem">
              Mensagem:
              <textarea
                name="areatexto"
                value={mensagem.ds_mensagem}
                onChange={(e) =>
                  setMensagem({ ...mensagem, ds_mensagem: e.target.value })
                }
              ></textarea>
              <input
                type="button"
                value={"Enviar"}
                onClick={() => salvarMensagem()}
              />
            </div>
          </div>
          <div className="chat">
            <div className="atualizar-mensagens">
              <img src={atualizar} alt="" onClick={() => Listar()} />
            </div>

            {mensagemPadrao && (
              <div className="areadochat">
                <div>
                  ({new Date().toLocaleDateString()}){" "}
                  <strong>{usuario.NM_USUARIO}</strong> entrou na sala...
                </div>
              </div>
            )}

            <div className="areadochat">
              {listaMensagem.map((item, index) => (
                <div className="mensagemnochat" key={index}>
                  <div className="conteudo-mensagens">
                    ({item.DT_MENSAGEM}) <strong>{item.NM_USUARIO}</strong> fala
                    para{" "}
                    <strong>
                      {item.DESTINATARIO === item.NM_USUARIO
                        ? "Todos"
                        : item.DESTINATARIO ?? "Todos"}
                    </strong>
                    : {item.DS_MENSAGEM}
                  </div>
                  <div className="edit-remove">
                    <img
                      src={edit}
                      alt=""
                      onClick={() =>
                        setMensagem({
                          ...mensagem,
                          id_mensagem: item.ID_MENSAGEM,
                          id_usuario_envio: item.ID_USUARIO_ENVIO,
                          id_usuario_para: item.ID_USUARIO_PARA,
                          id_sala: item.ID_SALA,
                          ds_mensagem: item.DS_MENSAGEM,
                          dt_mensagem: new Date(),
                        })
                      }
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
