import styles from "./Header.module.css";
import Avatar from "./Avatar";

const Header = ({author, date, type}) => {
   return (
      <header className={styles._}>
         <Avatar author={author}/>
         <div>
            <p>
               <a href={author.profileUrl}>{author.name}</a> shared a <span className={styles.typePost}>{type}</span>
            </p>
            <p className={styles.time}>{date}</p>
         </div>
      </header>
   )
}

export default Header;