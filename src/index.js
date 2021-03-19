import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import state, {addComment, updateTextArea, subscribe} from "./redux/state";


export const rerender = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} addComment={addComment} updateTextArea={updateTextArea}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

rerender(state);

subscribe(rerender);
