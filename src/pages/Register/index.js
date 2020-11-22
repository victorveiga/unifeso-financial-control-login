import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import {Link, useHistory} from 'react-router-dom';

export default () => {

    const history                  = useHistory();
    const [username, setUsername]  = useState('');
    const [password, setPassword]  = useState('');

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

                        <form method="post" name="register">
                            <div className="row">
                                <div className="col-md-5 mx-auto">
                                    <div className="form-group row">
                                        <label for="nomeUsuario">Nome de usuário</label>
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
                                        <label for="senha">Senha</label>
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
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <div className="col-md-5 mx-auto text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Começar</button>
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