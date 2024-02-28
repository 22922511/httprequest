 import express from 'express'
 var app=express();
 

 app.listen(3000,()=>
 {
  console.log("server has stated");
 })
app.get("/",(req,res) =>{
res.send("Hello i     ");

})

app.get("/home",(req,res)=>
{
res.send("404");

})
app.get("/about",(req,res)=>
  {
res.send(201);

  })
app.get("/contact", (req,res)=>
  {
res.send("Contact");

})
app.post("/home",(req,res)=>
{
  res.sendStatus(201);
})
app.delete("/home",(red,res)=>
{
  res.sendStatus(201);
})

  

























/*app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/