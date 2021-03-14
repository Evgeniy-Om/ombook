import Logo from "./Logo";
import Search from "./Search";
import NavList from "./NavList";
import User from "./User";
import styles from './_Header.module.css'
import SettingsBtn from "./SettingsBtn";

const Header = ({user}) => {
   return (
      <header className={styles._}>
         <div className="container">
            <div className={styles.wrapper}>
               <Logo/>
               <Search/>
               <NavList/>
               <User user = {user}/>
               <SettingsBtn/>
            </div>
         </div>
      </header>
   )
}

export default Header;