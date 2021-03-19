import styles from "./_Newsfeed.module.css";
import User from "./User";
import Stories from "./Stories";
import Post from "../../components/Post/_Post";
import Menu from "./Menu";

const Newsfeed = ({user, page, addComment, updateTextArea}) => {
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
                  addComment = {addComment}
                  updateTextArea={updateTextArea}
            />
         </main>
         <aside className="right-sidebar">
            <Stories stories={page.stories}/>
         </aside>
      </>
   )
}

export default Newsfeed;