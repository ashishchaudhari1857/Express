const path = require("path");
const Proudct=require('../model/Product')
let d;

exports.proudct = (req, res) => {
  console.log(req.body);
  res.redirect("/");
};
exports.form = (req, res) => {
  // res.send("<h1>ashish</h1>")
  res.sendFile(path.join(__dirname, "../views/form.html"));
};

exports.contact = (req, res) => {
  // res.send("<h1>ashish</h1>")
  res.sendFile(path.join(__dirname, "../views/contact.html"));
};


exports.success = (req, res) => {
  //  if w u have to send single   body only then  u  dont need to  convert it into   string    but in order to concat with the
  //  then u need to convert it into string
 const proudct=new Proudct(req.body.title, req.body.email);
 proudct.save();
Proudct.fetchall((products)=>{
  d=products;
  let contentString = JSON.stringify(d);   

  res.send(`<h3>form is successfully   submited</h3> ${contentString}`);

});
console.log(d)
};
