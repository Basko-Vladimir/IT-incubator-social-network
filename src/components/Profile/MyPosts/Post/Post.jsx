import React from "react";
import styles from "./Post.module.css";
import avatar from "../../../../images/avatar.jpg";
import like from "../../../../images/like.png";
import comment from "../../../../images/comment.png";


const Post = () => {
    return(
        <div className={styles.postBlock}>
            <div className={styles.postHeader}>
                <img className={styles.avatar} src={avatar} alt='avatar'/>
                <div className={styles.name}>
                    <span>Иван Иванов</span>
                </div>
                <div className={styles.time}>
                    <span>5 min ago</span>
                </div>
            </div>
            <div className={styles.postMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et labore libero
                maxime numquam quidem, veniam. Aliquam aspernatur aut consequatur cupiditate.
            </div>
            <div className={styles.postReview}>
                <div className={styles.like}>
                    <img src={like} alt="like"/>
                    <span>37</span>
                </div>
                <div className={styles.comment}>
                    <img src={comment}  alt="comment"/>
                    <span>12</span>
                </div>
            </div>
        </div>
    )
};

export default Post;