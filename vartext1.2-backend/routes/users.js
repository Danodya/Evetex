var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config =require('../config/user');

var userArray=[];
module.exports.userdetail = userdetail ={
    id:'',
    name:'rashan',
    profilepicture:'',
}
router.post('/register',function(req,res){
console.log('in the register');
    var newUser = new User();
    
            if(req.body.usertype=='organizer'){
    
        console.log('in the api');
        var firstname =req.body.firstname; 
        var lastname = req.body.lastname;       
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var usertype = req.body.usertype;
        
                 
                  newUser.firstname =firstname;
                  newUser.lastname = lastname;
                  newUser.username = username;
                  newUser.email = email;
                  newUser.password =password;
                  newUser.usertype = usertype;
            }else if(req.body.usertype=='service_provider'){
    
                var firstname =req.body.firstname; 
                var lastname = req.body.lastname;       
                var username = req.body.username;
                var email = req.body.email;
                var password = req.body.password;
                var usertype = req.body.usertype;
                var spCatagory = req.body.spCatagory;
                
                newUser.firstname =firstname;
                newUser.lastname = lastname;
                newUser.username = username;
                newUser.email = email;
                newUser.password =password;
                newUser.usertype = usertype;
                newUser.spCatagory =spCatagory;
            }
            
            User.addUser(newUser,function(err,user){

                    if(err){
                        res.json({
                            success:false,
                            message:'failled to register user'

                        });

                    } else{
                        res.json({
                            success:true,
                            message:'success  to register user'

                        });

                    }

            });

});

router.post('/authenticate',function(req,res,next){
    console.log('in the api');
        const username =req.body.username;
        console.log(username);
        const password = req.body.password;
        console.log(password);
        if(!username|| !password){
            console.log('hii');
                  res.statusCode =404;
                  res.json({
                    "status":"not found error",
                    "message":"some feeld are not filled"
                  });
            
                 }else{ 
                    
                    User.getUserByUsername(username,function(err,user){
           console.log(user);
            if(err){
                throw err;
            }
             if(!user){
        
                res.json({
                    success:false,
                    message:'user not found'

                });
            }
           else { User.comparePassword(password,user.password,function(err,isMatch){

                if(err){throw err}
                if(isMatch){ 

                    const token =jwt.sign({data:user},config.secret,{
                        expiresIn:604800// 1 week
                    });
                    res.json({
                        success:true,
                        token:'JWT'+token,
                        user:{

                            id:user._id,
                            username:user.username,
                            email:user.email,
                            usertype:user.usertype
                        }

                    });
                    this.userdetail.id =user._id;
                }else{
                    return res.json({success:false,message:'wrong password'});

                }
            });
        }
        });
    }

});

router.get('/profile', passport.authenticate('jwt', {session:false}),function(req, res, next){
    res.json({user: req.user});
});

router.get('/getUser/:id', (req, res) => {
    const user = User.getUserById(req.params.id);
    res.json({user: user});
});

module.exports.router =router;
