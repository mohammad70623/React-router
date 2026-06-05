import React from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log('users 2 suspense data load', users);
    return (
        <div>
            <h2>This is Users 2</h2>
        </div>
    );
};

export default Users2;