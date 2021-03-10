import styles from "./Logo.module.css";

const Logo = () => {
   return (
      <a className={styles._} href="#">
         <img src="icons/logo.svg" alt="Ombook" width="30" height="30"/>
      </a>
   )
}

export default Logo;