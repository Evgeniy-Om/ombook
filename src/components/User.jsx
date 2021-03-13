import styles from "./User.module.css";

const User = ({user}) => {
   return (
      <a className={styles.root} href="#">
         <img className={styles.img} src={user.avatarUrl} alt={user.name}/>
         <span className={styles.name}>{user.shortName}</span>
      </a>
   )
}

export default User;