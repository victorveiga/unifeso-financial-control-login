import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default () => {
    return (
        <div className="container" id="logon_principal">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="form">

                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>Logo</h1>
                                <h1>Conecte-se</h1>
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
                                />
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-success tx-tfm">Entrar</button>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or"/>
                                    <span className="span-or"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Não tem conta? <a id="signup">Inscreva-se aqui</a></p>
                                <div>
                                    <p style={{textAlign: 'center', marginTop: '0', paddingTop: 0}}>
                                        <a href="https://github.com/victorveiga">Victor Veiga</a>
                                    </p>
                                </div>
                            </div>
                            
                        </form>

                    </div>     
                        
                </div>
            </div>
        </div>
    );
}