import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./redux/state";


const rerender = (store) => {
   ReactDOM.render(
      <React.StrictMode>
         <App store={store}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerender(store);

store.subscribe(rerender);
