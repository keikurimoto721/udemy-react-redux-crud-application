import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import registerServiceWorker from './registerServiceWorker';

import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />    
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
