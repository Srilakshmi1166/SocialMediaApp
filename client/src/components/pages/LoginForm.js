import React, { useState } from 'react';
import { fetchData } from "../../main.js";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "./UserContext.js";
import {useContext}  from "react";


const LoginForm = () => { 
    {

  const navigate = useNavigate();
  const { updateUser} = useContext(UserContext);

  const [USERID, setUserId] = useState('');
  const [PASSWORD, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/LOGIN",{USERID,PASSWORD}, "POST")
    .then((data)=> {
      if(!data.message) {
        updateUser("authenticated", true)
        navigate('/Profile')
      }
    })  
    .catch((error) => 
    {
      console.log(error)
    })
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