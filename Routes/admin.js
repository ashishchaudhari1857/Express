const express=require("express");
const path =require('path')
const router= express.Router();


router.post('/product', (req, res)=>{
    console.log(req.body);
     res.redirect('/') 
    })
  
  
   router.get('/form', (req, res)=>{
    // res.send("<h1>ashish</h1>")
   res.sendFile(path.join(__dirname ,'../views/form.html' ))    
  })
  router.get('/contact', (req, res)=>{
    // res.send("<h1>ashish</h1>")
   res.sendFile(path.join(__dirname ,'../views/contact.html' ))    
  })
  router.post('/success', (req, res)=>{
    //  if w u have to send single   body only then  u  dont need to  convert it into   string    but in order to concat with the 
    //  then u need to convert it into string
    
    let contentString = JSON.stringify(req.body);

    res.send(`<h3>form is successfully   submited</h3> ${contentString}`)
  })
module.exports=router;

