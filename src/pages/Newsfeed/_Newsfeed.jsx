
import styles from "./_Newsfeed.module.css";
import BigBtn from "./BigBtn";
import User from "./User";

const Newsfeed = ({user}) => {
   return (
      <>
         <aside className="left-sidebar">
            <User user={user}/>
            <ul className={styles.menuList}>
               <BigBtn type="Newsfeed"/>
               <BigBtn type="Messenger"/>
               <BigBtn type="Friends"/>
               <BigBtn type="Location"/>
            </ul>
         </aside>
         <main className="main">121212</main>
         <aside className="right-sidebar">Right</aside>
         <a className={styles._} href="/newsfeed">121212</a>
      </>
   )
}

export default Newsfeed;