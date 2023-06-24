const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).render("login", {pageName: "Login Page", pageTitle: "Login"});
});

router.get("/logout", (req, res, next) => {
    res.status(302)
    res.redirect("/");
})
router.get("/home", (req, res, next)=>{
    res.status(200).render("home", {pageName: "Home Page", pageTitle: "Home"});
});

exports.mainRouter = router;