const  path=require('path')
const blog=require('../blogs/blog')

exports.home=(req, res)=>{
    res.sendFile(path.join(__dirname ,"../views/data.html" ))
 }

 exports.blogs=(req, res)=>{
    blog.forEach(element => {
     console.log(element)
    });
  res.sendFile(path.join(__dirname ,"../views/data.html" ))
}

exports.blogpost=(req, res)=>{

    const item= blog.filter((item)=>{
   return item.id==req.params.id;
    })
    console.log(item)
    res.send(item)
//  res.sendFile(path.join(__dirname ,"../views/data.html" ))
}