import styles from "./Comments-Item.module.css";
import Avatar from "./Avatar";


const CommentsItem = ({comments}) => {
   const {author, content} = comments;
   return (

      <div className="comment">
         <Avatar author={author}/>
         <div className="comment__content">
            <p className="comment__text">
               <a href="#" className="comment-name">Anthony Wood</a> I think I'm crying. It's that
               classic 🤘
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
   )
}

export default CommentsItem;