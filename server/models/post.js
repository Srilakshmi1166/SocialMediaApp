
const MONGOOSE = require("mongoose");
const moment = require('moment');

const SCHEMA = new MONGOOSE.Schema
({
  POSTCONTENT: { type: String, required: true},
  DATE: { type: Date, required: true},
  CREATORID:{ type: MONGOOSE.Schema.Types.ObjectId, ref:'USER', required: true }
});

const POST = MONGOOSE.model('Post',SCHEMA);

async function CREATE(creatorid, postcontent, date)
 {
  const NEWPOST = await POST.create({
    CREATORID: creatorid,
    POSTCONTENT: postcontent,
    DATE:moment().format('YYYY-MM-DD')
  });
  return NEWPOST;
}

async function UPDATE( id, creatorid, postcontent)
 {
  const post = FINDPOST(id);
  if(!post) throw Error("NO POST FOUND");
  
  const updateddata={
        POSTCONTENT : postcontent,
        DATE:moment().format('YYYY-MM-DD'),
        CREATORID: creatorid
    }
  const UPDATE = await POST.findOneAndReplace({"_id":id},updateddata,{ new: true });
  return UPDATE;
}

async function READ(id, creatorid) 
{
  const post = await FINDPOST(id);
  if(!post) throw Error("NO POST FOUND");
  return post;
}

async function DELETEPOST(id, creatorid)
{
  // creatorid will be used futher
  const remove= await POST.findOneAndRemove({"_id":id});
  if(!remove) throw Error("NO POST FOUND TO DELETE");
  return remove;
}

async function FINDPOST(id)
{
    return await POST.findOne({"_id":id});
}

module.exports = { 
  CREATE, UPDATE, READ, DELETEPOST
};