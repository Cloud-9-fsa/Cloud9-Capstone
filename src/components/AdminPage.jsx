import React, { useState, useEffect } from "react";
import { useAuth } from "../context/UseAuth";
import { createListing } from "../apiCalls/createListingAPI";
import {RenderNewListing} from "./CreateNewListing";



export const AdminPage = () => {

    const {user} = useAuth();
const [create, setCreate] = useState(false);



const handleClick = (e) => {
    setCreate(!create);
}



return(

<div>          <button onClick={(e) => handleClick(e)}>Create Listing</button>
 {create ? <RenderNewListing /> : null}
 </div>)
}
