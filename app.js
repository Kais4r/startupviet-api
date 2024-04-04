const express = require("express");
const app = express();

const cors = require("cors");
// Use CORS middleware
const corsOptions = {
  origin: "http://localhost:3001", //(https://your-client-app.com)
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const newsRoutes = require("./api/news/newsRoutes");
const userRoutes = require("./api/user/userRoutes");

app.use(express.json());

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", cors(corsOptions), newsRoutes);
app.use("/", cors(corsOptions), userRoutes);

module.exports = app;
