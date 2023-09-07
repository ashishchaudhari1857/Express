const express=require("express");
const path =require('path')
const router= express.Router();


router.post('/product', (req, res)=>{
    console.log(req.body);
     res.redirect('/') 
    })
  
  
   router.get('/form', (req, res)=>{
    // res.send("<h1>ashish</h1>")
   res.sendFile(path.join(__dirname ,'../template/form.html' ))    
  })
module.exports=router;

