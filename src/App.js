// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

function App({user}) {
   return (
      <div className="App">
         <Header user = {user}/>
         <div className="container">
            <div className="wrapper">
               <aside className="left-sidebar">Left</aside>
               <main className="main">
                  <Post user = {user}/>
               </main>
               <aside className="rigth-sidebar">Right</aside>
            </div>
         </div>
      </div>
   );
}

export default App;
