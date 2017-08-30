import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import Index from './components/Index';
import MovieDetail from './components/movie_detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path='/movies/:title/:id' component={MovieDetail} />
        <Route path='/' component={Index}  />

      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
