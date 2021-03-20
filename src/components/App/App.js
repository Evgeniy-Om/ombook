import './App.css';
import Header from "../Header/_Header";
import Newsfeed from "../../pages/Newsfeed/_Newsfeed";
import Messenger from "../../pages/Messenger/_Messenger";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App({store}) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header user={store.getState().user}/>

            <div className="container">
               <div className="wrapper">
                  <Switch>

                     <Route path="/newsfeed">
                        <Newsfeed user={store.getState().user}
                                  page={store.getState().newsfeedPage}
                                  dispatch={store.dispatch.bind(store)}
                        />
                     </Route>

                     <Route path="/messenger">
                        <Messenger/>
                     </Route>

                  </Switch>
               </div>
            </div>
         </div>


      </BrowserRouter>
   )
}

export default App;
