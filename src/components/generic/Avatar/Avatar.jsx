import styles from './avatar.module.css';

const Avatar = ({size, avatarUrl, name}) => {
   let classes = styles.img;

   switch (size) {
      case "30":
      case "48":
      case "120":
         classes += ` ${styles[`img_size${size}`]}`;
         break;
      default:
         break;
   }
   return (
      <a className={styles.root} href="#">
         <img className={classes} src={avatarUrl} alt={name}/>
      </a>
   )
};

export default Avatar;