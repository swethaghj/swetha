// Task1: initiate app and run server at 3000
const express =require('express');
const app= express();

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://swetha:sweswe@swe.h2oj0ve.mongodb.net/nirmala?retryWrites=true&w=majority&appName=swe").then(()=>{
      console.log("connected to db");
}) .catch((err)=>{
    console.log(error)
})

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

const postMod = require('../Casestudy2/model/post')

app.use(express.json());





//TODO: get data from db  using api '/api/employeelist'

app.get('/api/employeelist',async(req,res)=>{
    try {
        full_list= await postMod.find()
        res.send(full_list)
    } catch (error) {
       console.log(error) 
    }
})


//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',async(req,res)=>{
    const id=req.params.id;
    const task=await postMod.findById(id);
    if(!task){
        res.send("task not found")
    }
    else{
        res.send(task)
    }
});




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist',async(req,res)=>{
    try {
        const data=req.body;
        console.log(data);
        await postMod(data).save();
        res.send({message:"data added"})
    } catch (error) {
       console.log(error) 
    }
})





//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/api/employeelist/:id',async(req,res)=>{
    const id=req.params.id;
    try {
        const index=await postMod.findByIdAndDelete(id)
        res.send({message:"item deleted"})
    } catch (error) {
        console.log(error)
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.listen(3000,()=>{
    console.log("running in 3000")
})

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



