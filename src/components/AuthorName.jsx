import styles from "./AuthorName.module.css";

const AuthorName = ({name}) => {
 return (
    <a className={styles.root} href="#">{props.name}</a>
 )
}

export default AuthorName;