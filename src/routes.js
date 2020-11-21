import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// páginas:
import Logon from './pages/Logon';

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
                <Route path="/" component={Logon} />  
            </Switch>
        </BrowserRouter>
    );
}