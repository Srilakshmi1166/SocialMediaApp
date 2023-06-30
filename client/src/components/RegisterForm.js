import React, { useState } from 'react';

const RegisterForm = () => {
    const [USERID, setUserId] = useState('');
    const [EMAIL, setEmail] = useState('');
    const [FIRSTNAME, setFirstname] = useState('');
    const [LASTNAME, setLastname] = useState('');
    const [DATEOFBIRTH, setDateOfBirth] = useState('');
    const [PASSWORD, setPassword] = useState('');
    

    const Submit =async (e) =>
     {
      e.preventDefault();
     }
     

{
 return(
    <div>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="USERID" className="form-label">UserID</label>
          <input 
            type="text" 
            className="form-control" 
            id="USERID"
            name='UserID'
            value={USERID}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="EMAIL" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="EMAIL"
            name='EMAIL'
            value={EMAIL}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="FIRSTNAME" className="form-label">First Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="FIRSTNAME"
            name='FIRSTNAME'
            value={FIRSTNAME}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="LASTNAME" className="form-label">LastName</label>
          <input 
            type="text" 
            className="form-control" 
            id="LASTNAME"
            name='LASTNAME'
            value={LASTNAME}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="DATEOFBIRTH" className="form-label">DateOfBirth</label>
          <input 
            type="date" 
            className="form-control" 
            id="DATEOFBIRTH"
            name='DATEOFBIRTH'
            value={DATEOFBIRTH}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PASSWORD" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="PASSWORD"
            name='PASSWORD'
            value={PASSWORD}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
 };
};
export default RegisterForm;
