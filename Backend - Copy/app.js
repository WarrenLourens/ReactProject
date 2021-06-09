let express = require('express');
let app = express();
let port = 5000;

app.get("/", (req, res)=> res.send("Hello from the backend"));
app.listen(port,()=>console.log(`You backend is working on ${port}!`));