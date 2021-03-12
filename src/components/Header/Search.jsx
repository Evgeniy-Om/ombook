import styles from "./Search.module.css";

const Search = () => {
   return (
   <p className={styles._}>
      <label className="visually-hidden" htmlFor="search">Поиск</label>
      <input className={styles.input} type="text" name="search" id="search"
             placeholder="Search here"/>
   </p>
   )
}

export default Search;