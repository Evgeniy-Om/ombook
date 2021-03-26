import styles from "./_Newsfeed.module.css";
import Post from "../../components/Post/_Post";
import User from "./User";
import Menu from "./Menu";
import Stories from "./Stories";

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