import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {userId} = useParams()
    const {website, name} = user;
    console.log(userId)

    // const params = useParams();
    // console.log(params.userId)
    return (
        <div>
            <h2>User Details Here</h2>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;