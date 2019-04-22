import React from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import hom from '../hom/index';
import hom1 from '../hom1/index';
import homchildren1 from '../hom1/homchildren1/index.js';
import homchildren2 from '../hom1/homchildren2/index.js';

export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>Home</div>
                <ul>
                    <li><Link to={`/hom`}>hom</Link></li>
                    <li>
                        <Link to={`/hom1`}>hom1</Link>
                        <ul>
                            <li><Link to={`/hom1/homchildren1`}>homchildren1</Link></li>
                            <li><Link to={`/hom1/homchildren2`}>homchildren2</Link></li>
                        </ul>
                    </li>
                </ul>
                <Switch>
                    <Route path="/hom" component={hom} />
                    <Route path="/hom1" component={hom1}>
                        <Route path="/hom1/homchildren1" component={homchildren1} />
                        <Route path="/hom1/homchildren2" component={homchildren2} />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
