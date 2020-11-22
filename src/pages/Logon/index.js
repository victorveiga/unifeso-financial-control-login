import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

export default () => {

    const history                 = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container" id="logon_principal">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="form">

                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1><img src={logo} alt="kanban board" height="80px" width="80px"/></h1>
                            </div>
                        </div>

                        <form method="post" name="login">
                            <div className="form-group">
                            <label>Nome de usuário</label>
                                <input 
                                    type="text" 
                                    name="username"  
                                    className="form-control" 
                                    id="username" 
                                    placeholder="Entre com seu nome de usuário" 
                                    required
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"  
                                    className="form-control"
                                    placeholder="Entre com sua senha" 
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-12 text-center">
                                <button type="submit" className=" btn btn-block mybtn btn-success tx-tfm">Entrar</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or"/>
                                    <span className="span-or"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Não tem conta? <Link to="/register" id="signup">Inscreva-se aqui</Link></p>
                            </div>
                            
                        </form>

                    </div>     
                        
                </div>
            </div>
        </div>
    );
}