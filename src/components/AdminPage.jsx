import React, { useState, useEffect } from "react";
import { useAuth } from "../context/UseAuth";
import { createListing } from "../apiCalls/createListingAPI";
import {RenderNewListing} from "./CreateNewListing";
import { Streetview } from "@mui/icons-material";
import { ViewAllUsers } from "./ViewAllUsers";

export const AdminPage = () => {

const {user} = useAuth();
const [create, setCreate] = useState(false);
const [view, setView] = useState(false)

const handleClick = (e) => {
    setCreate(!create);
}


return(
<div> 
    <div>       
        <button onClick={(e) => handleClick(e)}>Create Listing</button>
         {create ? <RenderNewListing /> : null}
    </div> 
    <div>
        <button onClick={() => setView(!view)}>View All Users</button>
        {view ? <ViewAllUsers /> : null}
    </div> 
</div>)
}
