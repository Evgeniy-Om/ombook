import styles from "./Stories-Item.module.css";
import Avatar from "../../components/Avatar";
import AuthorName from "../../components/AuthorName";

const StoriesItem = ({avatarUrl, name, date}) => {
   return (
      <li className={styles._}>
         <Avatar avatarUrl = {avatarUrl} name = {name}/>
         <div>
            <p>{name}</p>
            <p className={styles.time}>{date}</p>
         </div>
      </li>
   )
}

export default StoriesItem;