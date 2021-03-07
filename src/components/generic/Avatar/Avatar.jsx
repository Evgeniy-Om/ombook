import styles from './avatar.module.css';

const Avatar = (props) => {
   let classes = styles.root;
   switch (props.size) {
      case "30":
      case "48":
      case "120":
         classes += ` ${styles[`root_size${props.size}`]}`;
         break;
      default:
         break;
   }
   return (
      <a className={classes} href="#">
         <img src={props.user[0].avatarUrl} alt={props.user[0].name}/>
      </a>
   )
};

export default Avatar;