
import './App.css';
import Header from "../Header/_Header";
import Newsfeed from "../../pages/Newsfeed/_Newsfeed";
import Messenger from "../../pages/Messenger/_Messenger";

function App({state}) {
   return (
      <div className="App">
         <Header user = {state.user}/>
         <div className="container">
            <div className="wrapper">
               <Newsfeed user = {state.user} page = {state.newsfeedPage}/>
               {/*<Messenger/>*/}
            </div>
         </div>
      </div>
   );
}

export default App;
