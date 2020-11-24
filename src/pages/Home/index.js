import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import React, {Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);

        this.user = null

        if (localStorage.getItem('user') == null) 
            props.history.push('/')
        else
            this.user = JSON.parse(localStorage.getItem('user'));
    }

    async logout(){
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return (
            <div className="container" id="logon_principal">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="form">

                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1><img src={logo} alt="kanban board" height="80px" width="80px"/></h1>
                                </div>
                            </div>

                            <div className="col-md-12 mx-auto border">
                                <div>
                                    Seja bem vindo {this.user?this.user.username:''}!
                                    <br/>
                                    Id: {this.user?this.user.id:''}
                                    <br/>
                                    Criado em: {this.user?this.user.createdAt:''}
                                    <br/>
                                    E-mail: {this.user?this.user.email:''}
                                </div>
                            </div>

                            <div>
                                <button className="btn btn-dark mt-3" onClick={this.logout}>Sair</button>
                            </div>

                        </div>     
                            
                    </div>
                </div>
            </div>
        );    
    }
}

export default Home;