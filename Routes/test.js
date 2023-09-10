const express=require('express')
const router=express.Router();
const bodyParser=require("body-parser");
const path=require('path')
const blog=require("../blogs/blog");
const testcontroller=require('../controller/test')
router.get('/',testcontroller.home )

 
router.get('/blogs',testcontroller.blogs) 

router.get('/blogpost/:id',testcontroller.blogpost )



module.exports=router;
