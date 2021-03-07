// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Post from "./components/post/Post";

function App(props) {
   const user = props.user;

   return (
      <div className="App">
         <Header/>
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
