const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./resources/user/user.router")

const app = express();

// Envioremtn virables are not saved in the codebased but rather in the code envoroment,
// this is useful for example api keys and sensitive data such ass passwords and such.

// Writing "test=123" in the terminal will save the variable test = 123 in the terminal enviroment.
// emv vars should always be on the production side and never in the code side.

// emv variables are pretty much only used for production applications to ensure safer apps.


// add gloal middlewares.
app.use(express.json());

// add routers

app.use("/api", userRouter)
app.use("/api", productRouter)
// add more routers here---

mongoose.connect("mongodb://localhost:27017", (err) => {
    if (err){
        console.error(err)
    } else {
        console.log("Connection to database established!")
        app.listen(3050, () => console.log("server is running on http://localhost:3050"));
    }});



