const express = require('express');
const mongoose = require('mongoose');

const adSchema =mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    }
})

const Admin = mongoose.model('admin',adSchema);

module.exports=Admin;