import React, {useState, useEffect} from 'react';
import { getUserInfo } from '../apiCalls/getUserInfoAPI';
import { AdminPage } from './AdminPage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UseAuth';



export const Profile = () => {
    const { user, token } = useAuth();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo(token);
            setUserInfo(data);
        };
        fetchData();
        console.log(fetchData);
    }, []);

    const capitalName = (name) => {
        if (!name) {
            return;
        }
        const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        return result;
}
const UserProfile = () => {
    if (user) {

        return (
            <div>
            <div className="userProfile">
                <h1>{capitalName(user.firstname)} {capitalName(userInfo.lastname)}</h1>
                <h1>{user.email}</h1>
                <h1>{user.address}</h1>
            </div>
            <div>
                {user.isAdmin ? <AdminPage /> : null}
            </div>
            </div>
        )

    }
}
return <UserProfile/>;

}
