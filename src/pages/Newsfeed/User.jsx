import styles from "./User.module.css";

const User = ({user}) => {
   return (
      <a className={styles._} href="#">
         <img className={styles.img} src={user.avatarUrl} alt={user.name}/>
         <span className={styles.name}>{user.fullName}</span>
      </a>
   )
}

export default User;