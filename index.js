
 const  express=  require("express");
 const  path=  require("path");
 const  home=require('./Routes/test.js')
   const app=express();
  // app.use(express.static(path.join(__dirname,"public")))
  // const ahishmiddleware =(req,res,next )=>{
  //   console.log("ahsihmiddle")
  // }
  // app.use(ahishmiddleware)
  //  app.get("/home/:name" ,(req ,res)=>{
  //   res.send("welcome to home" +req.params.name)
  //  })

  app.use("/" ,home)

//    app.get("/exp" ,(req ,res)=>{
//     //   res.send("ashish")
//     //   res.status(500)
//     //  res.json({name:"ahsih"})
//      res.sendFile(path.join(__dirname,'index.html'))

// })

   app.listen(3000,()=>{
     console.log("hey ima  there why")
   })