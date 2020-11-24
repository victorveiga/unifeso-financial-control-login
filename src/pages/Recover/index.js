import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js';
import Alert from 'react-bootstrap/Alert';

export default () => {

    const history                          = useHistory();
    const [username    , setUsername    ]  = useState('');
    const [password    , setPassword    ]  = useState('');
    const [password2   , setPassword2   ]  = useState('');
    const [email       , setEmail       ]  = useState(''); 
    const [rps_pergunta, setRps_pergunta]  = useState('');
    const [rps_resposta, setRps_resposta]  = useState('');
    const [modoRecp    , setModoRecp    ]  = useState(false);
    const [msgErro     , setMsgErro     ]  = useState(false);
    const [msgErroTxt  , setMsgErroTxt  ]  = useState('');


    async function handleEnviar(e){
        e.preventDefault();
        try {
            if (modoRecp){
                setModoRecp(false);
                if (password != password2) throw new Error("As senhas informadas são diferentes.");
                let req = await api.put('/users/recover', {username, email, password, rps_resposta});
                if (req.data == null) throw new Error("Não foi possível atualizar a senha.");
                alert('Senha atualizada com sucesso.');
                history.push('/');
            } else {
                setMsgErro(false)
                let req = await api.post('/users/recover', {username, email});
    
                if (req.data == null) throw new Error("Usuário não encontrado!")
    
                setModoRecp(true);
                setRps_pergunta(req.data.rps_pergunta)
            }
        } catch (error) {
            console.log(`Erro disparado: ${error.message}`)
            setMsgErro(true)
            setMsgErroTxt(`Erro disparado: ${error.message}`)
        }
    }

    return (
        <div className="container" id="register_principal">
            <div className="row" id="row_principal">
                <div className="col-md-12 mx-auto">
                    <div className="form">

                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1><img src={logo} alt="kanban board" height="80px" width="80px"/></h1>
                                <h1>Recuperar senha</h1>
                            </div>
                        </div>

                        <dir>
                            <Alert variant="danger" show={msgErro}>
                                Não foi possível atualizar a senha, por favor verifique os dados informados.
                                <br/>
                                {msgErroTxt}
                            </Alert>
                        </dir>

                        <form onSubmit={handleEnviar} method="post" name="register">
                            <div className="row">
                                <div className="col-md-5 mx-auto">
                                    <div className="form-group row">
                                        <label htmlFor="nomeUsuario">Nome de usuário</label>
                                        <input 
                                            type="text" 
                                            name="nomeUsuario"  
                                            className="form-control" 
                                            id="nomeUsuario" 
                                            placeholder="Informe um nome de usuário" 
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            required />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email">E-mail</label>
                                        <input 
                                            type="text" 
                                            name="email"  
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Informe seu email" 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required />
                                    </div>
                                    {modoRecp && <div className="form-group row">
                                        <label htmlFor="senha">Informe uma nova senha</label>
                                        <input 
                                            type="password" 
                                            name="senha"  
                                            className="form-control" 
                                            id="senha" 
                                            placeholder="Informe uma senha para seu usuário" 
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required />
                                    </div>}
                                    {modoRecp && <div className="form-group row">
                                        <label htmlFor="senha">Confirme a nova senha</label>
                                        <input 
                                            type="password" 
                                            name="senha"  
                                            className="form-control" 
                                            id="senha2" 
                                            placeholder="Confirme novamente a senha para seu usuário" 
                                            value={password2}
                                            onChange={e => setPassword2(e.target.value)}
                                            required />
                                    </div>}
                                    {modoRecp && <div className="form-group row">
                                        <div></div>
                                        <br/>
                                        <label htmlFor="respostaSeguranca">{`Responda a pergunta de segurança: ${rps_pergunta}`}</label>
                                        <input 
                                            type="text" 
                                            name="respostaSeguranca"  
                                            className="form-control" 
                                            id="respostaSeguranca" 
                                            placeholder="Informe aqui a sua resposta pessoa" 
                                            value={rps_resposta}
                                            onChange={e => setRps_resposta(e.target.value)}
                                            required />
                                    </div>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <div className="col-md-5 mx-auto text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-success tx-tfm">Enviar</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="login-or">
                                            <hr className="hr-or"/>
                                            <span className="span-or"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">Já tem uma conta? <Link to="/" id="signin">Acesse aqui</Link></p>
                                    </div>
                                </div>
                            </div>
                        </form>    

                    </div>     
                        
                </div>
            </div>
        </div>
    );
}