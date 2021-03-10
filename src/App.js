// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Newsfeed from "./pages/Newsfeed/Newsfeed";

function App({user}) {
   return (
      <div className="App">
         <Header user = {user}/>
         <div className="container">
            <div className="wrapper">
               <Newsfeed/>
            </div>
         </div>
      </div>
   );
}

export default App;
