import React from "react";
import styles from "./UserItem.module.css";
import avatar from "../../../images/avatar.jpg";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/API";

const UserItem = (props) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.bgPhoto}>
                <NavLink className={styles.userProfileLink} to={`/profile/${props.user.id}`}>
                    <img src={ props.user.photos.small ? props.user.photos.small : avatar} className={styles.avatar} alt="avatar"/>
                </NavLink>
                    {props.user.followed
                        ?  <div onClick={() => {
                            usersAPI.unfollow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0){
                                        props.unfollow(props.user.id)
                                    }
                                });
                        }} className={styles.subscription}>Unfollow</div>
                        :  <div onClick={() => {
                            usersAPI.follow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0){
                                        props.follow(props.user.id)
                                    }
                                });
                        }} className={styles.subscription}>Follow</div> }
            </div>
            <div className={styles.userInfo}>
                <NavLink className={styles.userProfileLink} to={`/profile/${props.user.id}`}>
                    <div className={styles.name}>
                        <span>{props.user.name}</span>
                    </div>
                </NavLink>
                <div >
                    <span>Country</span>
                </div>
                <div className={styles.status}>
                    <span>{props.user.status ? props.user.status : `Status don't specified` }</span>
                </div>
                <div>
                    <span>City</span>
                </div>
            </div>
        </div>
    )
};

export default UserItem;
UserItem.propTypes = {
    users: PropTypes.object
};
