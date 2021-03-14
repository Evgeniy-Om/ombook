import styles from './Avatar.module.css';

const Avatar = ({type, avatarUrl, name}) => {
   return (
      <a className={styles[type] || styles._} href="#">
         <img src={avatarUrl} alt={name}/>
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#7540EE" stroke-width="2"/>
         </svg>
      </a>

   )
};

export default Avatar;