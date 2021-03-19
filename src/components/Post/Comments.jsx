import styles from "./Comments.module.css";
import CommentsItem from "./Comments-Item";

const Comments = ({comments}) => {

   let commentsList = comments.map((item, index) => {
      return <CommentsItem key={index} comment={item}/>
   })

   return (
      <div>
         {commentsList}
      </div>
   )
}

export default Comments;