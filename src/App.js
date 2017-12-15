import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { readToken } from "./token";
import logo from './assets/logo.svg';
import './assets/App.css';

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        readToken() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        console.log(readToken());
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute path="/" component={Home} />
                </Switch>
            </Router>
        );
        // if (this.state.isAuthenticated) {
        //     return (
        //         <Router>
        //             <Switch>
        //                 <Route exact path="/" component={Home} />
        //             </Switch>
        //         </Router>
        //     );
        // } else {
        //     return (
        //         <Router>
        //             <Switch>
        //                 <Route exact path="/" component={Login} />
        //             </Switch>
        //         </Router>
        //     );
        // }
    }
}

export default App;
