import React, { useState, useEffect } from "react";
import { useAuth } from "../context/UseAuth";
import { createListing } from "../apiCalls/createListingAPI";
import {RenderNewListing} from "./CreateNewListing";
import { Streetview } from "@mui/icons-material";
// import { ViewAllUsers } from "./ViewAllUsers";





export const AdminPage = () => {

const {user} = useAuth();
const [create, setCreate] = useState(false);
// const [edit, setEdit] = useState(false)



const handleClick = (e) => {
    setCreate(!create);
    // setView(!view);

}

// const handleAttachUsers = async (e) => {
//     await getAllUsers;
// }

return(

<div> 
    <div>       
        <button onClick={(e) => handleClick(e)}>Create Listing</button>
         {create ? <RenderNewListing /> : null}
    </div> 
    <div>
    

    {/* {user.isAdmin ? (
            <button
              onClick={async () => {

              setView(!view);
              }}
            //   type="edit"
            >
              View All Users
            </button>
          ) : (
            <></>
          )}
          {view? (<ViewAllUsers/>) : null } */}



        {/* <button onClick={(e) => handleAttachUsers(e)}>View All Users</button>
        {edit ? <ViewAllUsers /> : null} */}
    </div> 
</div>)
}
