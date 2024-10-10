// eslint-disable-next-line no-unused-vars
import React, { Children, useState } from "react";

import UserContext from "./userContext";

const UserContextProvider = ()=>{
    const [user , setUser] = useState(null);

    return (
            <UserContext.Provider value={{user , setUser}}>
                {Children}
            </UserContext.Provider>
    )
}
export default UserContextProvider