import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/product" component={App} />
        <Route path="/preorder" component={App} />
        <Route path="/orderlist" component={App} />
        <Route path="/delivery" component={App} />
        <Route path="/shopinfo" component={App} />
        <Route path="/orderDetail" component={App} />
        <Route path="/addProduct" component={App} />

    </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
