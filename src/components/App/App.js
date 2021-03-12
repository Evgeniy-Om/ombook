
import './App.css';
import Header from "../Header/_Header";
import Newsfeed from "../../pages/Newsfeed/_Newsfeed";

function App({user}) {
   return (
      <div className="App">
         <Header user = {user}/>
         <div className="container">
            <div className="wrapper">
               <Newsfeed user = {user}/>
            </div>
         </div>
      </div>
   );
}

export default App;
