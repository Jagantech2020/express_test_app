const express = require("express");

const app = express();

const router = express.Router();

router.get("/login", (req, res, next)=>{
    res.status(200).send("<h1>Login Page</h1>")
});

router.get("/dashboard", (req, res, next)=>{
    res.status(200).send("<h1>Dashboard Page</h1>")
});

app.use("/", router);
app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h2>");
});

const port = 3000;
app.listen(port, ()=>{
    console.log("server is running");
})