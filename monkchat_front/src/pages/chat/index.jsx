import "./index.scss";
import logoMonk from "../../assets/images/logo_monk.png";
import line from "../../assets/images/Line 1.png"
import atualizar from "../../assets/images/Botao Atualizar.png"
import edit from "../../assets/images/edit.svg"
import remove from "../../assets/images/remove.svg"



export default function Chat() {
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
                            <div className="insercao-dados"> Sala: <input type="text" /></div>
                            <div className="insercao-dados"> Nick: <input type="text" /> </div>
                            <div className="insercao-dados"> Para: <input type="text" /> </div>
                            <div className="insercao-dados">
                                <label ></label><div><input type="button" value="Criar" /> <input type="button" value="Entrar" /></div>
                            </div>

                        </div>
                        <div className="mensagem">
                            Mensagem:
                            <textarea name="areatexto" id=""></textarea>
                            <input type="button" value="Entrar" />
                        </div>
                    </div>
                    <div className="chat">
                        <div className="atualizar">
                            <div><img src={atualizar} alt="" /></div>
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
                                    <img src={edit} alt="" />
                                    <img src={remove} alt="" />
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