
const MONGOOSE = require("mongoose");

const SCHEMA = new MONGOOSE.Schema({
  USERID: {type: String, unique: true, required: true},
  PASSWORD: {type: String, required: true},
  FIRSTNAME: {type: String, required: true},
  LASTNAME: {type: String, required: true},
  EMAIL: {type: String, required: true},
  DATEOFBIRTH:{type: Date, required: true}
})

const USER = MONGOOSE.model('USER', SCHEMA);

async function REGISTER(userid, password, firstname, lastname, email, dateofbirth)
{
  const user = await GETUSER(userid);
  if(user) throw Error('Username is not available');
  const NEWUSER = await USER.create({
    USERID: userid,
    PASSWORD: password,
    FIRSTNAME: firstname,
    LASTNAME: lastname,
    EMAIL: email,
    DATEOFBIRTH: dateofbirth
  });
  return NEWUSER;
}

async function LOGIN(userid, password)
{
  const user = await GETUSER(userid);
  if(!user) throw Error('There is no user with this userid');
  if(user.PASSWORD != password)
  { 
    throw Error('Incorrect Password is provided');
  }
  return user;
 }

async function UPDATEPASSWORD(id, password)
 {
  const user = await USER.findOneAndUpdate({"_id":id}, {$set: { PASSWORD: password}});
  return user;
}

async function UPDATEEMAIL(userid, email) 
{
    const user = await USER.findOneAndUpdate({USERID:userid}, {$set: { EMAIL: email}});
    return user;
}

async function DELETEUSER(id) 
{
  await USER.findOneAndRemove({"_id": id});
}

async function GETUSER(userid)
{
    return await USER.findOne({ "USERID": userid});
}

module.exports = 
{ 
  REGISTER, LOGIN, UPDATEPASSWORD, UPDATEEMAIL, DELETEUSER
}