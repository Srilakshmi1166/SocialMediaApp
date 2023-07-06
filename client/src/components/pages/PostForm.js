import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const PostForm = () => {
  const [postContent, setPostContent] = useState('');
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      TODAYDATE: new Date().toISOString(),
      POSTCONTENT: postContent,
      CREATORID: user.userid,
    };

    const updatedProfile = {
      ...user.profile,
      posts: [...user.profile.posts, newPost],
    };

    updateUser('profile', updatedProfile);

    setPostContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post Content:
        <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
