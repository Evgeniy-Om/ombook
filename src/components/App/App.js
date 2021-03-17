import './App.css';
import Header from "../Header/_Header";
import Newsfeed from "../../pages/Newsfeed/_Newsfeed";
import Messenger from "../../pages/Messenger/_Messenger";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App({state}) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header user={state.user}/>
            <div className="container">
               <div className="wrapper">
                  <Switch>
                     <Route path="/newsfeed">
                        <Newsfeed user={state.user} page={state.newsfeedPage}/>
                     </Route>
                     <Route path="/messenger">
                        <Messenger />
                     </Route>
                  </Switch>
               </div>
            </div>
         </div>


      </BrowserRouter>
   )
}

export default App;
