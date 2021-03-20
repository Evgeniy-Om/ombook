import styles from "./_Newsfeed.module.css";
import User from "./User";
import Stories from "./Stories";
import Post from "../../components/Post/_Post";
import Menu from "./Menu";

const Newsfeed = ({user, page, dispatch}) => {
   return (
      <>
         <aside className="left-sidebar">
            <User
               src={user.avatarUrl}
               name={user.name}
               fullName={user.fullName}
            />
            <Menu/>
         </aside>
         <main className="main">
            <Post post={page.posts[0]}
                  dispatch={dispatch}
            />
         </main>
         <aside className="right-sidebar">
            <Stories stories={page.stories}/>
         </aside>
      </>
   )
}

export default Newsfeed;