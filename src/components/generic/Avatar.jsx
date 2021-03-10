import styles from './Avatar.module.css';

const Avatar = ({type, avatarUrl, name}) => {
   return (
      <a className={styles[type] || styles._} href="#">
         <img src={avatarUrl} alt={name}/>
      </a>
   )
};

export default Avatar;