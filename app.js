const express = require("express");
const path = require("path");

const { mainRouter } = require("./routes/main");
const { adminRouter } = require("./routes/admin");
const { dirname } = require("./utils");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(dirname, "views"))

app.use(express.static(path.join(dirname, "public")));

app.use("/admin", adminRouter);
app.use("/", mainRouter);

app.use((req, res, next) => {
    res.status(200).render("404", {pageTitle: "Page Not Found", pageName: "404 - Page Not Found"})
});

const port = 3000;
app.listen(port, ()=>{
    console.log("server is running");
})