const express = require("express");
const app = express();


const users = [
    {
        id: "1",
        username: "john",
        password: "John0908",
        isAdmin: true
    },
    {
        id: "2",
        username: "Jane",
        password: "Jane0908",
        isAdmin: false
    }
]
app.listen(5000, () => console.log("BackEnd server is runnig!"))




