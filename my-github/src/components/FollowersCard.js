import React from "react";

const FollowersCard = ({followers, img, bio}) => {
    return (
        <div className="card">

            <img src={img} alt="user"/>
            <p className="name">Name: {followers}</p>
            <p className="name">Bio: {bio}</p>

        </div>
    )
}

export default FollowersCard;

