import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  return (
    <form>
      <div>
        <label htmlFor="userid">UserId:</label>
        <input
          type="text"
          id="userid"
          name="userid"
          value={formData.userid}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
