const express = require("express");
const app = express();
const port = 8080;

app.set("New engine", "ejs");

app.get("/", (request, response) => {
    let result={name:"Stef"}; 
    response.render("index.ejs", result);
});

app.listen(port, () => {
    console.log("I am ready!");
});