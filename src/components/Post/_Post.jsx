import LikeBtn from "./LikeBtn";
import styles from "./_Post.module.css";
import CommentBtn from "./CommentBtn";
import Header from "./Header";
import Text from "./Text";
import Gallery from "./Gallery";
import Comments from "./Comments";
import {createRef} from 'react';


const Post = ({post, dispatch}) => {
   const {author, content} = post,
      {comments, type, text, hashtags, likes, totalComments, date, gallery, inputText} = content;

   const newCommentElement = createRef();

   const add = () => {
      dispatch({type: "ADD-COMMENT"})
   }

   const update = () => {
      let newText = newCommentElement.current.value;
      const action = {type: "UPDATE-INPUT-TEXT", newText: newText};
      dispatch(action);
   }

   return (
      <article className={styles._}>
         <Header author={author} type={type} date={date}/>
         <Gallery gallery={gallery}/>
         <Text text={text} hashtags={hashtags}/>

         <div className={styles.boxBtn}>
            <LikeBtn likes={likes}/>
            <CommentBtn totalComments={totalComments}/>
         </div>

         <Comments comments={comments}/>
         <form>
            <input onChange={update} ref={newCommentElement} type="text" value={inputText}/>
            <button onClick={add} type="button">Отправить сообщение</button>
         </form>
      </article>
   )
}

export default Post;