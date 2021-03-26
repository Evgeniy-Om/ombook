import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./redux/state";


const rerender = (store) => {
   ReactDOM.render(
      <App store={store}/>,
      document.getElementById('root')
   );
}

rerender(store);

store.subscribe(rerender);
