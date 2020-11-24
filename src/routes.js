import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// páginas:
import Logon from './pages/Logon';
import Register from './pages/Register';
import Home from './pages/Home';
import Recover from './pages/Recover';

/*
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => 
        isAuthenticated()? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: {from: props.location}}} />
        )
    }
    />
);
*/

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/recover" component={Recover} />
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}