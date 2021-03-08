import s from './header.module.css'
import Avatar from "../generic/Avatar/Avatar";

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className="container">
            <div className={s.wrapper}>
               {/*<!-- Логотип -->*/}
               <a className={s.logo} href="#">
                  <img className="logo__img" src="icons/logo.svg" alt="Ombook" width="30" height="30"/>
               </a>

               {/*<!-- Строка поиска -->*/}
               <p className={s.header__search + ' ' + s.search}>
                  <label className="visually-hidden" htmlFor="search">Поиск</label>
                  <input className="search__input" type="text" name="search" id="search" placeholder="Search here"/>
               </p>

               {/*<!-- Кнопки навигации -->*/}
               <ul className="header__nav">
                  <li className="header__nav-item">
                     <a className="header__nav-link" href="#">
                        <img src="icons/messanger.svg" width="21" height="14" alt="Messanger"/>
                     </a>
                  </li>
                  <li className="header__nav-item">
                     <a className="header__nav-link" href="#">
                        <img src="icons/friends.svg" width="20" height="19" alt="Messanger"/>
                     </a>
                  </li>
                  <li className="header__nav-item">
                     <a className="header__nav-link" href="#">
                        <img src="icons/notifications.svg" width="19" height="22" alt="Messanger"/>
                     </a>
                  </li>
               </ul>
               {/*<!-- Пользователь -->*/}


               <div className="header__user user">
                  <Avatar
                     size = "30"
                     avatarUrl = {props.user[1].avatarUrl}
                     name = {props.user[1].name}
                  />
                  <a className="user__link" href="#" title="Carolyn">
                     <span className="user__short-name">Carolyn</span>
                  </a>
               </div>
               {/*<!-- Кнопка настроек -->*/}
               <a className="header__settings-btn" href="#">Settings
                  <img src="icons/settings.svg" width="20" height="20" alt="Settings"/>
               </a>
            </div>
         </div>
      </header>
   )
}

export default Header;