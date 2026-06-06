import React from 'react';
import { useNavigate } from 'react-router';
import { Link} from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handlenavigate=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border: '2px solid red'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button></Link>
            <button onClick={handlenavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;