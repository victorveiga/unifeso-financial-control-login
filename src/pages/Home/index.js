import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../assets/logo.png';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js';
import Alert from 'react-bootstrap/Alert'

export default () => {

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

                    </div>     
                        
                </div>
            </div>
        </div>
    );
}