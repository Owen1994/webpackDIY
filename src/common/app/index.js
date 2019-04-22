import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../../home/component/index.js';

export default class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
                <button onClick={() => this.props.changeCommonData()}>click me to change the name below</button>
                <p>{this.props.userName}</p>
                <ul>
                    <li><Link to={`/home`}>home</Link></li>
                    <li><Link to={`/life`}>life</Link></li>
                    <li><Link to={`/life`}>shopping</Link></li>
                </ul>
                <Switch>
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}