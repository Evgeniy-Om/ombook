import styles from "./Text.module.css";

const Text = ({text, hashtags}) => {
   if (text || hashtags) {
      return (
         <div className={styles._}>
            <p>{text} <a className={styles.hashtags} href="#">{hashtags[0]}</a></p>
         </div>
      )
   }
   return null;
}

export default Text;