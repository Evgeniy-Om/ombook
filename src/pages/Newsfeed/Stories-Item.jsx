import styles from "./Stories-Item.module.css";
import Avatar from "../../components/Post/Avatar";

const StoriesItem = ({avatarUrl, name, date, url}) => {
   return (
      <li className={styles._}>
         <a href={url}>
            {/*<Avatar avatarUrl = {avatarUrl} name = {name}/>*/}
            <div className={styles.avatar}>
               <img className={styles.img} src={avatarUrl} alt={name}/>
               <svg viewBox="0 0 48 48" fill="none">
                  <rect x="1" y="1" width="46" height="46" rx="23" stroke="#7540EE" strokeWidth="2"/>
               </svg>
            </div>
            <div>
               <p>{name}</p>
               <p className={styles.time}>{date}</p>
            </div>
         </a>
      </li>
   )
}

export default StoriesItem;