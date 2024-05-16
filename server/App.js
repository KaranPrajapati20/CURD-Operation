const express = require('express');
const app = express();
require('./db/connect');
const userRouter = require('./route/user');
const cors = require('cors');

app.use(cors());

//to interact with json, middleware
app.use(express.json())

app.use("/api/v1", userRouter);

app.get('/', (req, resp) => {
    resp.send("Home page");
});
app.get('/about', (req, resp) => {
    resp.send("about page");
});


//this is a port number 
app.listen(3003, () => {
    console.log("running on 3003");
});
