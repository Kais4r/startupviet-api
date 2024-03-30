const express = require("express");
const app = express();

const newsRoutes = require("./api/news/newsRoutes");
const userRoutes = require("./api/user/userRoutes");

app.use(express.json());

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", newsRoutes);
app.use("/", userRoutes);

module.exports = app;
