import LikeBtn from "./LikeBtn";
import styles from "./_Post.module.css";
import CommentBtn from "./CommentBtn";
import Header from "./Header";
import Text from "./Text";
import Gallery from "./Gallery";
import Comments from "./Comments";

const Post = ({post}) => {
   const {author, content} = post,
      {comments, type, text, hashtags, likes, totalComments, date, gallery} = content;
   return (
      <article className={styles._}>
         <Header author = {author} type = {type} date = {date}/>
         <Gallery gallery = {gallery}/>
         <Text text = {text} hashtags = {hashtags}/>

         <div className={styles.boxBtn}>
            <LikeBtn likes={likes}/>
            <CommentBtn totalComments={totalComments}/>
         </div>

         <Comments comments = {comments}/>
         <form action="post">
            <input type="text"/>
            <button type="submit">Отправить сообщение</button>
         </form>
      </article>
   )
}

export default Post;