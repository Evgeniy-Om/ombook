import LikeBtn from "./LikeBtn";
import styles from "./_Post.module.css";
import CommentBtn from "./CommentBtn";
import Header from "./Header";
import Text from "./Text";
import Gallery from "./Gallery";
import Comments from "./Comments";
import React from 'react';


const Post = ({post, addComment, updateTextArea}) => {
   const {author, content} = post,
      {comments, type, text, hashtags, likes, totalComments, date, gallery, textArea} = content;

   const newCommentElement = React.createRef();
   const add = () => {
      addComment(textArea);
   }

   const update = () => {
      let textCom = newCommentElement.current.value;
      updateTextArea(textCom);
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
            <input onChange={update} ref={newCommentElement} type="text" value={textArea}/>
            <button onClick={add} type="button">Отправить сообщение</button>
         </form>
      </article>
   )
}

export default Post;