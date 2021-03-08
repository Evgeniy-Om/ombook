import styles from  "./userName.module.css";

const UserName = (props) => {
 return (
    <a className={styles.root} href="#">{props.name}</a>
 )
}

export default UserName;