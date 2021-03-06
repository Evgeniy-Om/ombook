import styles from "./Logo.module.css";
import {Link} from "react-router-dom";

const Logo = () => {
   return (
      <Link className={styles._} to="/newsfeed">
         <svg width="30" height="30" viewBox="0 0 30 30" fill="#7540EE" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="5"/>
            <path d="M14.3208 30V16.8311H11.8838V13.6221H14.3208V12.2295C14.3208 10.3929 14.8455 8.97005 15.895 7.96094C16.9546 6.94173 18.4329 6.43213 20.3301 6.43213C20.9355 6.43213 21.6772 6.53304 22.5552 6.73486L22.5098 10.1255C22.1465 10.0347 21.7025 9.98926 21.1777 9.98926C19.5329 9.98926 18.7104 10.7612 18.7104 12.3052V13.6221H21.9648V16.8311H18.7104V30H14.3208Z" fill="white"/>
         </svg>
      </Link>
   )
}

export default Logo;