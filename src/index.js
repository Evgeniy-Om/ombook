import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import state from "./redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App user = {state.user} />
  </React.StrictMode>,
  document.getElementById('root')
);
