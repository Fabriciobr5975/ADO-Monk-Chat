import "./index.scss";
import logoMonk from "../../assets/images/logo_monk.png";
import line from "../../assets/images/Line 1.png"
import atualizar from "../../assets/images/Botao Atualizar.png"
import edit from "../../assets/images/edit.svg"
import remove from "../../assets/images/remove.svg"
import axios from "axios";
import { useState } from "react";




export default function Chat() {
    const [nick, setNick] = useState('');
    const [sala, setSala] = useState('');
    const [dest, setDest] = useState('');
    const [texto, setTexto] = useState('');
    const [mensagem, setMensagem] = useState([
        {
            ID_USUARIO_ENVIO:"",
            ID_USUARIO_PARA:"",
            ID_SALA:"",
            DS_MENSAGEM:"",
            DT_MENSAGEM:getCurrentDate()
        }
    ]);
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


    async function Deletar() {
        
    }
    async function Listar() {

    }
    async function Enviar() {

    }
    async function Alterar() {

    }
    async function Criar() {
        let body = {
            ID_USUARIO: "",
            NM_SALA: ""
        }
        const resp = await axios.post("/sala", body);

    }
    async function Entrar() {
        let body = [
            
        ]
        const resp = await axios.post("/participante");
    }



    return (
        <main>
            <header>
                <div className="logo">
                    <div className="logo_monk">
                        <img src={logoMonk} alt="logo_monk" /><img src={line} alt="" />
                    </div>
                </div>
                <label className="logo-txt">  MonkChat</label>
                <label className="conta"><h5>Minha Conta</h5></label>


            </header>

            <section className="conteudo">
                <div className="container">
                    <div className="input">
                        <div className="dados">
                            <div className="insercao-dados"> Sala: <input type="text" onChange={(e)=> setSala(e.target.value)}/></div>
                            <div className="insercao-dados"> Nick: <input type="text" onChange={(e)=> setNick(e.target.value)}/> </div>
                            <div className="insercao-dados"> Para: <input type="text" onChange={(e)=> setDest(e.target.value)}/> </div>
                            <div className="insercao-dados">
                                <label ></label><div><input type="button" value="Criar" onClick={Criar} />
                                    <input type="button" value="Entrar" onClick={Entrar} /></div>
                            </div>

                        </div>
                        <div className="mensagem">
                            Mensagem:
                            <textarea name="areatexto" id="" onChange={(e)=> setTexto(e.target.value)}></textarea>
                            <input type="button" value="Enviar" onClick={Enviar} />
                        </div>
                    </div>
                    <div className="chat">
                        <div className="atualizar">
                            <div><img src={atualizar} alt="" onClick={Listar} /></div>
                        </div>
                        <div className="areadochat">
                            <div className="mensagemnochat">
                                <div>
                                    (15:02:01) <strong>{"Brunex"}</strong>  entrou na sala...
                                </div>
                            </div>
                            <div className="mensagemnochat">
                                <div>(15:03:25) <strong>{"Brunex"}</strong> fala para <strong>{"Todos"}</strong>: Opa, tudo bem ai?</div>
                                <div className="edit-remove">
                                    <img src={edit} alt="" onClick={Alterar} />
                                    <img src={remove} alt="" onClick={Deletar} />
                                </div>
                            </div >
                            <div className="mensagemnochat">

                            </div>
                            <div className="mensagemnochat">
                                <div>
                                    (15:03:25) <strong>{"Brunex"}</strong> fala para <strong>{"Osvaldo"}</strong>: To com fomeeeee
                                </div>

                                <div className="edit-remove">
                                    <img src={edit} alt="" />
                                    <img src={remove} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </main>

    )
}