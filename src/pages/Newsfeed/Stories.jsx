import styles from "./Stories.module.css";

export default function Stories({stories}) {
   return (
      <div className={styles._ + " border"}>
         <p>Stories</p>
         <AddBtn/>
         <ul className={styles.list}>
            {
               stories.map((el, index) =>
                  <Item
                     key={index}
                     avatarUrl={el.avatarUrl}
                     url={el.url}
                     name={el.name}
                     date={el.date}
                  />
               )
            }
         </ul>
         <a className={styles.showMore} href="#">Show more</a>

      </div>
   )
}

const AddBtn = () => {
   return (
      <div className={styles.addBtn}>
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#EBEEF4" strokeWidth="2"/>
            <rect x="4" y="4" width="40" height="40" rx="20" fill="#EBEEF4"/>
            <mask id="mask0" maskUnits="userSpaceOnUse" x="4" y="4" width="40" height="40">
               <rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
               <path d="M31 23.881H25.119V18H23.881V23.881H18V25.119H23.881V31H25.119V25.119H31V23.881Z"
                     fill="#C1C8D7"/>
            </g>
         </svg>
         <div>
            <p>Add to Your Story</p>
            <p>Share a photo or video</p>
         </div>
      </div>
   )
}

const Item = ({avatarUrl, name, date, url}) => {
   return (
      <li className={styles.item}>
         <a href={url}>
            <div className={styles.avatar}>
               <img className={styles.img} src={avatarUrl} alt={name}/>
               <svg viewBox="0 0 48 48" fill="none">
                  <rect x="1" y="1" width="46" height="46" rx="23" stroke="#7540EE" strokeWidth="2"/>
               </svg>
            </div>
            <div>
               <p>{name}</p>
               <p className={styles.time}>{date}</p>
            </div>
         </a>
      </li>
   )
}
