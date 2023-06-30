import React, { useState } from 'react';

const LoginForm = () => { 
    {

  const [USERID, setUserId] = useState('');
  const [PASSWORD, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('User ID:', USERID);
    console.log('Password:', PASSWORD);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="USERID">User ID:</label>
        <input
          type="text"
          id="USERID"
          value={USERID}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="PASSWORD">Password:</label>
        <input
          type="PASSWORD"
          id="PASSWORD"
          value={PASSWORD}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Login"/>
    </form>
  );
};
};

export default LoginForm;