
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
import { Link } from 'react-router-dom';


function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://panorbit.in/api/users.json')
            .then(response => setUsers(response.data.users))
            .catch(error => console.log(error));
    }, []);

    return (

        <div className="App">
            <div className='Layer'>
                <div className='user'>
                    <div className="user-card-list">
                        <div className='heading'><h1> Select an account</h1></div>
                        <div className='user-list'>
                            <ul>
                                {users.map(user => (
                                    <Link to={`/user/${user.id}/profile`} key={user.id}>
                                        <ul key={user.id}>
                                            <div className="user-card">
                                                <div className="profile-pic">
                                                    <img src={user.profilepicture} alt={user.name} />
                                                </div>
                                                <div className="user-details">
                                                    <h3>{user.name}</h3>
                                                </div>
                                            </div>
                                        </ul>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default UserList;

