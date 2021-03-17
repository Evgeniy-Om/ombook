import styles from "./Comments.module.css";
import CommentsItem from "./Comments-Item";

const Comments = ({comments}) => {
   return (
      <>
         <CommentsItem comments = {comments[0]}/>
         <CommentsItem comments = {comments[0]}/>
         <CommentsItem comments = {comments[0]}/>
         </>
   )
}

export default Comments;