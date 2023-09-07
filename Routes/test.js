const express=require('express')
const router=express.Router();

const path=require('path')
const blog=require("../blogs/blog")
router.get('/', (req, res)=>{
   res.sendFile(path.join(__dirname ,"../template/data.html" ))
})

router.get('/blogs', (req, res)=>{
     blog.forEach(element => {
      console.log(element)
     });
   res.sendFile(path.join(__dirname ,"../template/data.html" ))
})

router.get('/blogpost/:id', (req, res)=>{

    const item= blog.filter((item)=>{
   return item.id==req.params.id;
    })
    console.log(item)
    res.send(item)
//  res.sendFile(path.join(__dirname ,"../template/data.html" ))
})



module.exports=router;
