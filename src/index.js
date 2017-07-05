import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/index.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import favoriteCard from './containers/favoriteCard';
import { createStore, applyMiddleware } from 'redux';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}> </Route>
            <Route path="/favorites" component={favoriteCard} />
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);
