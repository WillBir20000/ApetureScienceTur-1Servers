const express = require("express");
const app = express();

// homepage
app.get("/", (req, res) => {
    res.send("🔥 My API is running!");
});

// example API route
app.get("/city", (req, res) => {
    res.json({
        name: "MyCity",
        population: 5,
        crime: Math.random()
    });
});

// start server
app.listen(() => {
    console.log("Server running on port " + PORT);
});