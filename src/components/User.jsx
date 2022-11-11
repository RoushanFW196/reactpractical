import React, { useState, useEffect } from "react";

const User = ({props}) => {
 console.log("User", props)


  return (
  <div className="User-container">
   {/* {user.map((el)=>{
     return(
        <div>
        {el.first_name}
        </div>
     )
   })} */}
  </div>
  );
};

export default User;
