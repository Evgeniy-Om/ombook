import styles from "./Gallery.module.css";

const Gallery = ({gallery}) => {
   if (!gallery) return null;

   const {totalImages, previewUrl} = gallery;
   let rootClass, sizeClass

   // Добавляю css классы в зависимости от того,
   // сколько изображений должно быть показано на странице
   switch (totalImages) {
      case 0:
         return null;
      case 1:
         break;
      case 2:
         rootClass = "_";
         sizeClass = "size50";
         break;
      default:
         rootClass = "_";
         sizeClass = "size33";
   }

   // Массив из 3 первых фотографий
   const el = previewUrl.map((item, i) => {
      return (
         <a className={styles[sizeClass]} href="#">
            <img className={styles.image} src={item} alt=""/>
            {
               // Выводим число фотографий, которые ещё есть в галерее
               (i === 2 && totalImages > 3)
               && <div className={styles.more}>+{totalImages-2}</div>
            }
         </a>
      )
   });

   return (
      <div className={styles[rootClass]}>
         {el}
      </div>
   )
}

export default Gallery;