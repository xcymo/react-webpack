import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MyComponent1 from './xcy1';
import MyComponent2 from './xcy2';
import MyComponent3 from './xcy3';
import Error from './404';
import NavBar from './nav'
ReactDOM.render(
    // 这里有个坑，Router只能有一个子标签，和template一样
    // exact 精确匹配
    // 404 页面必须要写在最后，因为是按照从上到下匹配。并且用Switch组件包起来
    // Redirect 也要在Switch里面
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MyComponent1} />
                <Route path="/xcy2" component={MyComponent2} />
                <Route path="/xcy3" component={MyComponent3} />
                <Redirect from="/redirect1" to="/xcy3" />
                <Route component={Error} />
            </Switch>
        </div>

    </Router>
    , document.getElementById('app'))