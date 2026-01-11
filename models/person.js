let mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
     name:{
        type:String,
        required :true
     },
     age:{
        type:Number
     },
     work:{
        type:String,
        enum:['Chef','owner','manager','waiter']
     },
     mobile:{
        type:String
     },
     email:{
        type:String,
        unique:true
     },
     address:{
        type:String
     },
     salary:{
        type:Number
     }
});

let model = mongoose.model("person",personSchema);
module.exports = model;