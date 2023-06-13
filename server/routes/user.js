
const express = require("express");
const USER = require('../models/user'); 
const USERROUTE = express.Router();


USERROUTE
  
  .post('/REGISTER', async (req, res) => {
    try
     {
      const user = await USER.REGISTER(req.body.userid, req.body.password,req.body.firstname, req.body.lastname, req.body.email,req.body.dateofbirth);
      res.send({...user, PASSWORD: undefined});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message }); 
    }
  })

  .post('/LOGIN', async (req, res) => {
    try 
    {
      const user = await USER.LOGIN(req.body.userid, req.body.password);
      res.send({...user, password: undefined});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/UPDATEPASSWORD', async (req, res) => {
    try 
    {
      const user = await USER.UPDATEPASSWORD(req.body._id, req.body.password);
      res.send({...user, password: undefined});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/UPDATEEMAIL', async (req, res) => {
    try 
    {
      const user = await USER.UPDATEEMAIL(req.body.userid, req.body.email);
      res.send({user});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/DELETEUSER', async (req, res) => {
    try 
    {
      await USER.DELETEUSER(req.body._id);
      res.send({ success: "ACCOUNT DELETED"});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = USERROUTE;