const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");


dotenv.config();
app.use(express.json());

app.listen("5000", () => {
    console.log("Backend is running. v2");
});

mongoose.connect(process.env.MONGO_URL, {

}).then(console.log("Connected")).catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/posts", commentRoute);
