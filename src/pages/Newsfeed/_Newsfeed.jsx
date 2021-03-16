import styles from "./_Newsfeed.module.css";
import BigBtn from "./BigBtn";
import User from "./User";
import Stories from "./Stories";
import Post from "../../components/Post/_Post";

const Newsfeed = ({user, page}) => {
   return (
      <>
         <aside className="left-sidebar">
            <User
               src={user.avatarUrl}
               name={user.name}
               fullName={user.fullName}
            />
            <ul className={styles.menuList}>
               <BigBtn type="Newsfeed"/>
               <BigBtn type="Messenger"/>
               <BigBtn type="Friends"/>
               <BigBtn type="Location"/>
            </ul>
         </aside>
         <main className="main">
            <Post post = {page.posts[0]}/>
         </main>
         <aside className="right-sidebar">
            <Stories stories={page.stories}/>
         </aside>
      </>
   )
}

export default Newsfeed;