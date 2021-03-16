import styles from "./Comments.module.css";
import CommentsItem from "./Comments-Item";

const Comments = ({comments}) => {
   return (
      <CommentsItem comments = {comments}/>
   )
}

export default Comments;