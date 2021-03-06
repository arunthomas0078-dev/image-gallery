import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { MemoryRouter  } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/ConfigureStore';


axios.defaults.baseURL = `https://imagegallery-f0af7.firebaseio.com/`;

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store = {store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
