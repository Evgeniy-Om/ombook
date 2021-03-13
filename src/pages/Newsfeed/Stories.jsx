import styles from "./Stories.module.css";
import StoriesAdd from "./Stories-Add";
import StoriesItem from "./Stories-Item";

const Stories = ({stories}) => {
   return (
      <div className={styles._ + " border"}>
         <p>Stories</p>
         <StoriesAdd/>
         <ul className={styles.list}>
            <StoriesItem
               avatarUrl = {stories.avatarUrl}
               name = {stories.name}
               date = {stories.date}
            />
         </ul>
      </div>
   )
}

export default Stories;