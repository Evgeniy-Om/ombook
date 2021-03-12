import LikeBtn from "./LikeBtn";
import Avatar from "../Avatar";
import styles from "./_Post.module.css";
import AuthorName from "../AuthorName";

const Post = (props) => {
   const user = props.user;
   return (
      <article className={styles._}>
         <header className={styles.header}>
            <Avatar avatarUrl = {props.user[0].avatarUrl} name = {props.user[0].name}/>

            <div>
               <p>
                  <AuthorName name = {props.user[0].name}/> shared a <a href="#">image</a>
               </p>
               <p className="post__time">Yesterday at 1:08 AM</p>
            </div>
         </header>

         <img className="post__img" src="images/post-img-1.jpg"/>
         <div className="post__text">
            <p>Friendship ... is born at the moment when one man says to another "What! You too? I
               thought that no
               one but myself… <a href="#">#friendship</a></p>
         </div>
         <div className="post__btns">
            <LikeBtn likes = "1890"/>

            <button className="post__btn btn">
               <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M2.68766e-05 9.00862C2.68766e-05 4.13151 4.48603 0.163788 10 0.163788C15.514 0.163788 20 4.13151 20 9.00862C20 13.8857 15.514 17.8534 10 17.8534C8.57903 17.8534 7.20703 17.5947 5.91903 17.0839C3.65069 18.3707 0.514694 18.8143 0.379694 18.8329C0.364027 18.8352 0.348694 18.8362 0.33336 18.8362C0.20836 18.8362 0.0916936 18.7671 0.0350269 18.6547C-0.0289731 18.5289 -0.00363979 18.3766 0.0976935 18.277C0.86436 17.5239 1.39236 15.9341 1.58936 13.7927C0.548694 12.3647 2.68766e-05 10.7134 2.68766e-05 9.00862ZM4.00003 9.00862C4.00003 9.73127 4.59803 10.319 5.33336 10.319C6.06869 10.319 6.66669 9.73127 6.66669 9.00862C6.66669 8.28596 6.06869 7.69827 5.33336 7.69827C4.59803 7.69827 4.00003 8.28596 4.00003 9.00862ZM10 10.319C9.26469 10.319 8.66669 9.73127 8.66669 9.00862C8.66669 8.28596 9.26469 7.69827 10 7.69827C10.7354 7.69827 11.3334 8.28596 11.3334 9.00862C11.3334 9.73127 10.7354 10.319 10 10.319ZM13.3334 9.00862C13.3334 9.73127 13.9314 10.319 14.6667 10.319C15.402 10.319 16 9.73127 16 9.00862C16 8.28596 15.402 7.69827 14.6667 7.69827C13.9314 7.69827 13.3334 8.28596 13.3334 9.00862Z"
                        fill="#949FB7"/>
               </svg>
               <span>Comments <span className="post__comments-number">(32)</span></span>
            </button>
         </div>

         <div className="comment">
            <Avatar avatarUrl = {props.user[0].avatarUrl} name = {props.user[0].name}/>
            <div className="comment__content">
               <p className="comment__text">
                  <a href="#" className="comment-name">Anthony Wood</a> I think I'm crying. It's that
                  classic 🤘
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam, soluta error
                  fugit ipsa
                  reprehenderit, magni sint sed in omnis sequi expedita laboriosam consectetur provident,
                  consequuntur iste tempore vel amet?
               </p>
               <div className="comment__btns">
                  <button className="comment__btn btn">
                     <svg width="13" height="14" viewBox="0 0 19 20" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M2.88393 14.5893C1.94852 14.5893 1.1875 15.3503 1.1875 16.2857C1.1875 17.2211 1.94852 17.9821 2.88393 17.9821C3.81934 17.9821 4.58036 17.2211 4.58036 16.2857C4.58036 15.3503 3.81934 14.5893 2.88393 14.5893Z"
                           fill="#949FB7"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M17.9092 10.4388C18.3639 10.6325 18.8304 11.0285 18.8304 11.875C18.8304 12.7025 18.2349 13.3936 17.4498 13.5419C17.6768 13.8306 17.8125 14.1944 17.8125 14.5893C17.8125 15.4168 17.2171 16.1079 16.432 16.2562C16.659 16.5449 16.7947 16.9086 16.7947 17.3036C16.7947 18.239 16.0337 19 15.0982 19H5.59825V19.6786H0.169678V6.78571H5.59825V7.46429H5.93753C6.04373 7.46429 8.31254 7.40355 8.31254 2.375C8.31254 0.308411 9.22114 0 9.76264 0H9.84373C10.9834 0 12.0314 1.32525 12.2072 2.51038C12.2812 3.01082 12.498 4.76391 12.1678 6.30732L11.9205 7.46429H16.7947C17.7301 7.46429 18.4911 8.2253 18.4911 9.16071C18.4911 9.66998 18.2655 10.1277 17.9092 10.4388ZM0.848249 7.46429V19H4.91968V7.46429H0.848249Z"
                              fill="#949FB7"/>
                     </svg>
                     <span>334</span>
                  </button>
                  <button className="comment__btn btn ">Reply</button>
               </div>
            </div>
         </div>
      </article>
   )
}

export default Post;