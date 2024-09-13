const express = require('express');
const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    }
});

const User = mongoose.model('user',userSchema);

module.exports=User