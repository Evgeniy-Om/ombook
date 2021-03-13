import styles from "./User.module.css";

const User = ({src, name, fullName}) => {
   return (
      <a className={styles._} href="#">
         <img className={styles.img} src={src} alt={name}/>
         <span className={styles.name}>{fullName}</span>
      </a>
   )
}

export default User;