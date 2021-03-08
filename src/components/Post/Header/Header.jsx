import Avatar from "../../generic/Avatar/Avatar";
import UserName from "../../generic/UserName/UserName";
import styles from "./header.module.css";

const Header = (props) => {
   return (
      <header className={styles.root}>
         <Avatar avatarUrl = {props.user[0].avatarUrl} name = {props.user[0].name}/>

         <div>
            <p>
               <UserName name = {props.user[0].name}/> shared a <a href="#">image</a>
            </p>
            <p className="post__time">Yesterday at 1:08 AM</p>
         </div>
      </header>
   )
}

export default Header;