import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js';
import Alert from 'react-bootstrap/Alert'

export default () => {

    const history                 = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgErro , setMsgErro ] = useState(false);

    async function handleLogin(e){
        e.preventDefault();
        try {
            const result = await api.post('/users/validate', {username, password});

            if (result.data == null) throw new Error('Sem dados')

            localStorage.setItem('user', JSON.stringify(result.data))
            history.push('/home')
        } catch (error) {
            console.log(`Erro disparado: ${error.message}`)
            setMsgErro(true)
        }
        
    }

    return (
        <div className="container" id="logon_principal">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <dir>
                        <Alert variant="danger" show={msgErro}>
                            Erro ao validar o usuário. Por favor, verifique o nome de usuário e a senha antes de continuar.
                        </Alert>
                    </dir>
                    <div className="form">

                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1><img src={logo} alt="kanban board" height="80px" width="80px"/></h1>
                            </div>
                        </div>

                        <form onSubmit={handleLogin} method="post" name="login">
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
                                <p className="text-center">Esqueceu a senha? <Link to="/register" id="signup">Clique aqui</Link></p>
                            </div>
                        </form>

                    </div>     
                        
                </div>
            </div>
        </div>
    );
}