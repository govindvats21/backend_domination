const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/auth-routes");
const mongooseConnection = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/api/auth", authRoutes);

app.listen(process.env.PORT);