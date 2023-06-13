
const express = require("express");
const POST = require('../models/post'); 
const POSTROUTE = express.Router();


POSTROUTE
  .post('/CREATE', async (req, res) => {
        try
         {
            const post = await POST.CREATE(req.body.creatorid, req.body.postcontent, req.body.date);
            res.send({...post});
          } 
          
          catch(error) 
          {
            res.status(401).send({ message: error.message });
          }  
    })
  
  .put('/UPDATE', async (req, res) => {
    try 
    {
      const post = await POST.UPDATE(req.body._id, req.body.creatorid, req.body.postcontent);
      res.send({...post});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/READ', async (req, res) => {
    try 
    {
      const post = await POST.READ(req.body._id,req.body.creatorid);
      res.send({...post});
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message }); 
    }
  })

  .delete('/DELETEPOST', async (req, res) => {
    try 
    {
      await POST.DELETEPOST(req.body._id, req.body.creatorid);
      res.send({ success: "DELETED THE POST" });
    } 
    catch(error) 
    {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = POSTROUTE;