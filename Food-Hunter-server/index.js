const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT|| 5000;
app.use(cors());
const chef=require("./data/chefData.json")

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/chefdeta",(req, res)=> {
   res.send(chef)
 })
app.get("/chefdeta/:id", (req, res) => {
  const id = req.params.id;
  const recipe = chef.find(details => details.id == id);
  
  res.send(recipe)
  console.log(recipe);
  res.send(id);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
