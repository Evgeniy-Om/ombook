import Logo from "./components/Logo";
import Search from "./components/Search";
import NavList from "./components/NavList";
import User from "./components/User";
import styles from './Header.module.css'
import SettingsBtn from "./components/SettingsBtn";

const Header = ({user}) => {
   return (
      <header className={styles._}>
         <div className="container">
            <div className={styles.wrapper}>
               <Logo/>
               <Search/>
               <NavList/>
               <User user = {user[1]}/>
               <SettingsBtn/>
            </div>
         </div>
      </header>
   )
}

export default Header;