/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <h2>Not Logged In</h2>;
    return (
        <div>
            <h1>Profile : {user.userName}</h1>
        </div>
    );
}

export default Profile;