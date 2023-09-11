   const blog=require('../blogs/blog')
   const fs=require('fs')
   const path =require("path")
   let  p = path.join(path.dirname(process.mainModule.filename) ,"store","details.json")
   const getfetchdata=(cb)=>{
    fs.readFile(p , (err ,content)=>{
  
      if(err){
        console.error('Error reading file:', err);
        return cb([]);
      }
      try {
        const parsedData = JSON.parse(content);
        cb(parsedData);
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        cb([]);
      }

  })
   }
 module.exports=class Proudct{
    constructor(title ,email){
        this.title=title;
        this.email=email;
    }

    save(){
      getfetchdata((product)=>{
      let products=[];

        products=product;
        products.push(this)
        fs.writeFile(p, JSON.stringify(products) ,(err)=>{
          console.log(err)
     })
      })
    }

    static fetchall(cb){
getfetchdata(cb)    
    }
 }