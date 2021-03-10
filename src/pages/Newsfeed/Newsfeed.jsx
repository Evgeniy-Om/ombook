import styles from "./Newsfeed.module.css";
import BigBtn from "./components/BigBtn";

const Newsfeed = (props) => {
   return (
      <>
         <aside className="left-sidebar">
            <ul className={styles.menuList}>
               <BigBtn/>
               <BigBtn/>
               <BigBtn/>
               <BigBtn/>
            </ul>

         </aside>
         <main className="main">121212</main>
         <aside className="right-sidebar">Right</aside>
         <a className={styles._} href="/newsfeed">121212</a>
      </>
   )
}

export default Newsfeed;