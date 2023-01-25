import React, { useEffect } from "react";
import { fetchListings } from "../apiCalls/listingsAPI";
import { useAuth } from '../context/UseAuth';
import 




export const Shop= () => {
    const { listings, setListings } = useAuth();
  
  useEffect(() => {
    const getAllListings = async () => {
      const data = await fetchListings();
      setListings(data);
    //   console.log("THESE ARE MY Listings", data)
    }; 
    getAllListings();
  }, []);
  console.log("here are the listings:", listings);
  const allCategoryListings = listings?.map(({id, category, name, isHot, price}) => {
    return( 
    <div className="AllListings" key={id}>
        <p>Category: {category}</p>
        <p>Name: {name}</p>
        <FontAwesomeIcon icon="fa-solid fa-house" />
        <p>isHot: {isHot}</p>
        <p>Price: {price}</p>
    </div>)
  }   
  )

  return (
    <div>
      <h1>Main Product Page</h1>
      {/* <div className="RoutineForm"> 
      <RoutineForm privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList}/> */}
      <div className="AllListings">{allCategoryListings}</div>
      </div>
    // </div>
    )

}



