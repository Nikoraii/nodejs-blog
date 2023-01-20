const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

dotenv.config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, {

}).then(console.log("Connected")).catch((err) => console.log(err));

const http = require("http");

app.use(express.json());

app.listen("5000", () => {
    console.log("Backend is running. v2");
});

// app.listen(process.env.PORT, '0.0.0.0', function(err) {
//     console.log("Started listening on %s", app.url);
// });

app.get("/", (req, res) => {
    res.send("Check the <a target='_blank' href='https://github.com/Nikoraii/nodejs-blog/tree/master'>" +
    "github</a> repo for more information.");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/posts", commentRoute);
