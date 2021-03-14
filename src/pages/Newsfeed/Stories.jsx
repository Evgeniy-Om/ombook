import styles from "./Stories.module.css";
import StoriesAdd from "./Stories-Add";
import StoriesItem from "./Stories-Item";

const Stories = ({stories}) => {
   let storiesItems = stories
      .map((el) =>
         <StoriesItem
            avatarUrl={el.avatarUrl}
            url = {el.url}
            name={el.name}
            date={el.date}
         />
      )
   return (
      <div className={styles._ + " border"}>
         <p>Stories</p>
         <StoriesAdd/>
         <ul className={styles.list}>{storiesItems}</ul>
         <a className={styles.showMore} href="#">Show more</a>

      </div>
   )
}

export default Stories;