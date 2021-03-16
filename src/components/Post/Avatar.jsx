import styles from './Avatar.module.css';

const Avatar = ({author}) => {
   const {avatarUrl, name, profileUrl} = author;
   return (
      <a className={styles._} href={profileUrl}>
         <img src={avatarUrl} alt={name}/>
      </a>

   )
};

export default Avatar;