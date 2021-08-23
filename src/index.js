import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createStore from './store';
import {Provider} from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import './App.css'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

