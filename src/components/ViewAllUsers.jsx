import React, { useEffect, useState } from "react";
import { useAuth } from "../context/UseAuth";
import { fetchAllUsers } from "../apiCalls/getAllUsersAPI";

export const ViewAllUsers = () => {
  const {token} = useAuth();
  const [getAllUsers, setGetAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetchAllUsers(token);
      setGetAllUsers(data);
    };
    getAllUsers();
  }, []);
  console.log(getAllUsers);
  const userList = getAllUsers.map(({ id, email, firstname, lastname, address }) => {
    return (
      <div className="AllUsers" key={id}>
        <div className="SingleUserInfo">
            <h2>email: {email}</h2>
            <h2>First Name: {firstname}</h2>
            <h2>Last Name: {lastname}</h2>
            <h2>Address: {address}</h2>
            <br></br>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>All Users</h1>
      <div className="AllUsers">{userList}</div>
    </div>
  );
};
