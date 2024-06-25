import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import { fetchUser } from '../api/user/UserAPI';

export default function TestPage() {
    const [user, setUser] = useState({});
    const ACCESS_TOKEN = localStorage.getItem('accessToken');

    useEffect(() => {
        // 
        if(ACCESS_TOKEN){
            fetchUser()
            .then((response) => {
                setUser(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }, [ACCESS_TOKEN]);

    const handleLogout = async () => {
        localStorage.clear();
        window.location.href='/home';
    }

    return (
        <nav>
            {ACCESS_TOKEN
                ?
                (
                    <div>
                        {user.username + "님 환영합니다"}
                        <button onClick={handleLogout}>logout</button>
                    </div>
                ) :
                (
                    <div>
                        <button onClick={() => { window.location.href = '/signin' }}>login</button>
                        <button onClick={() => { window.location.href = '/signup' }}>signup</button>
                    </div>
                )
            }
        </nav>
    );
}