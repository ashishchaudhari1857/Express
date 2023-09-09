const  express=  require("express");
const bodyParser=require("body-parser");
 const  path=  require("path");
 const  shop=require('./Routes/test.js')
const admin=require('./Routes/admin.js')
 const app=express();

 app.use(bodyParser.urlencoded({extended:false}))
 app.use(express.static(path.join(__dirname,'public')))
  // app.use(express.static(path.join(__dirname,"public")))
  // const ahishmiddleware =(req,res,next )=>{
  //   console.log("ahsihmiddle")
  // }
  // app.use(ahishmiddleware)
  //  app.get("/home/:name" ,(req ,res)=>{
  //   res.send("welcome to home" +req.params.name)
  //  })
// 
  app.use("/" ,shop)//
  app.use("/" ,admin)//

  app.use('/',(req, res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
  })

//    app.get("/exp" ,(req ,res)=>{
//     //   res.send("ashish")
//     //   res.status(500)
//     //  res.json({name:"ahsih"})
//      res.sendFile(path.join(__dirname,'index.html'))

// })

   app.listen(3000,()=>{
     console.log("hey ima  there why")
   })