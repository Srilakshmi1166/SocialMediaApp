import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../pages/UserContext.js';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: posts.length + 1,
      content: newPost,
    };

    setPosts([...posts, post]);
    setNewPost('');
  };

  return (
    <div>
      <h1>HELLO {user.USERID}</h1>

      <h3>POSTS</h3>
      {posts.length === 0 ? (
        <p>No posts Available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      )}
      <Link to="/PostForm">Create a new post</Link>
    </div>
  );
};

export default Profile;
