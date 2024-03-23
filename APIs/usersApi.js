const exp=require("express")
const userApp=exp.Router()

//import expressAsynchandler to deal with errors
const expressAsyncHandler=require('express-async-handler')

//body parser
userApp.use(exp.json())   //exp.json()is a builtin middleware

//import bcryptjs to hash password
const bcryptjs=require('bcryptjs')

//import jwt token
const jwt=require('jsonwebtoken')


//user login
userApp.post('/user-login',expressAsyncHandler(async(request,response)=>{
    //get user collection obj
    const usersCollectionObj=request.app.get('usersCollectionObj');
    //get user credentials from request
    const userCredObj=request.body;
    //verify username
    let userOfDB=await usersCollectionObj.findOne({username:userCredObj.username})
    if(userOfDB===null){   //invalid
       response.status(200).send({message:'Invalid Username'})
    }
    else{
       //verify password
       //hash the password
       let isEqual=await bcryptjs.compare(userCredObj.password,userOfDB.password)
       if(isEqual===false){
          response.status(200).send({message:'Invalid password'})
       }
       else{
          //create a JWT token
          let jwtToken=jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:20})
          //send token as response
          delete userOfDB.password;
          response.status(200).send({message:'success',token:jwtToken,user:userOfDB})
       
       }
    }
 
 }))



//user-register
userApp.post('/user-register',expressAsyncHandler(async(request,response)=>{
    const usersCollectionObj=request.app.get('usersCollectionObj')
    
    //get newUser from request  
    const newUser=request.body;

    let userOfDB=await usersCollectionObj.findOne({username:newUser.username})
    if(userOfDB!==null){
        response.status(200).send({message:'User already existed'})
    }
    else{
        //hash the password
        let hashedPassword=await bcryptjs.hash(newUser.password,5)
        newUser.password=hashedPassword
        //then insert user
        usersCollectionObj.insertOne(newUser)
        response.status(200).send({message:'User Created successfully'})
    }
}))

module.exports=userApp
