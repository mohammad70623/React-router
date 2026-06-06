import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>This is Users Page</h2>
            <div>
                {
                    users.map(user => <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default Users;