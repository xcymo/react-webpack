import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
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
    // Router basename 层级关系
    // forceRefresh 强制刷新，没听懂，先关掉
    /*
        几种路由模式： 1. BrowserRouter 缺点：刷新后会找不到页面但是URL比较漂亮；
                    2.  HashRouter 缺点：URL不漂亮，带个#； 优点： 刷新后可以直接看
                    3.  MemoryRouter 缺点： 不能前进后退； 优点：URL漂亮
                    4. NativeRouter react-native使用
                    5. StaticRouter 静态路由，配合后台使用，服务端渲染
    */
    <HashRouter basename="demo" forceRefresh={false}>
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MyComponent1} />
                <Route path="/xcy2" component={MyComponent2} />
                <Route path="/xcy3/:a/:b" component={MyComponent3} />
                <Redirect from="/redirect1" to="/xcy3" />
                <Route component={Error} />
            </Switch>
        </div>
    </HashRouter>
    , document.getElementById('app'))