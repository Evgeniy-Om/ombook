import styles from "./Menu.module.css";
import MenuItem from "./Menu-Item";

const Menu = () => {

   return (
      <ul className={styles._}>
         <MenuItem type="Newsfeed"/>
         <MenuItem type="Messenger"/>
         <MenuItem type="Friends"/>
         <MenuItem type="Location"/>
      </ul>
   )
}

export default Menu;