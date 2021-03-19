import styles from "./Stories.module.css";
import StoriesAddBtn from "./Stories-AddBtn";
import StoriesItem from "./Stories-Item";

const Stories = ({stories}) => {
   let storiesItems = stories
      .map((el, index) =>
         <StoriesItem
            key = {index}
            avatarUrl={el.avatarUrl}
            url = {el.url}
            name={el.name}
            date={el.date}
         />
      )
   return (
      <div className={styles._ + " border"}>
         <p>Stories</p>
         <StoriesAddBtn/>
         <ul className={styles.list}>{storiesItems}</ul>
         <a className={styles.showMore} href="#">Show more</a>

      </div>
   )
}

export default Stories;