import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js'

export default () => {

    const history                          = useHistory();
    const [username    , setUsername    ]  = useState('');
    const [password    , setPassword    ]  = useState('');
    const [email       , setEmail       ]  = useState(''); 
    const [rps_pergunta, setRps_pergunta]  = useState('');
    const [rps_resposta, setRps_resposta]  = useState('');

    async function handleRegistrar(e){
        e.preventDefault();
        const req = await api.post('/users', {username, password, email, rps_pergunta, rps_resposta});

        if (req.data.id){
            history.push('/');
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
                                <h1>Registre-se</h1>
                            </div>
                        </div>

                        <form onSubmit={handleRegistrar} method="post" name="register">
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
                                        <label htmlFor="senha">Senha</label>
                                        <input 
                                            type="password" 
                                            name="senha"  
                                            className="form-control" 
                                            id="senha" 
                                            placeholder="Informe uma senha para seu usuário" 
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
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
                                    <div className="form-group row">
                                        <label htmlFor="pergunta_seguranca">Pergunta pessoal de segurança</label>
                                        <input 
                                            type="text" 
                                            name="pergunta_seguranca"  
                                            className="form-control" 
                                            id="pergunta_seguranca" 
                                            placeholder="Informe seu email" 
                                            value={rps_pergunta}
                                            onChange={e => setRps_pergunta(e.target.value)}
                                            required />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="resposta_seguranca">Resposta pessoal da pergunta anterior</label>
                                        <input 
                                            type="text" 
                                            name="resposta_seguranca"  
                                            className="form-control" 
                                            id="resposta_seguranca" 
                                            placeholder="Informe seu email" 
                                            value={rps_resposta}
                                            onChange={e => setRps_resposta(e.target.value)}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <div className="col-md-5 mx-auto text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-success tx-tfm">Começar</button>
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