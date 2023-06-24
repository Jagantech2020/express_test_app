const express = require("express");
const { loggedInUser } = require("./main");

const router = express.Router();

router.get("/settings", (req, res, next) => {
    console.log(loggedInUser.detail);
    if(loggedInUser.detail && loggedInUser.detail.isLoggedIn){
    res.status(200).render("settings", {pageName: "Settings Page", pageTitle: "Settings"});
    } else {
        res.status(302).redirect("/");
    }
});

router.get("/role", (req, res, next) => {
    console.log(loggedInUser.detail);
    if(loggedInUser.detail && loggedInUser.detail.isLoggedIn){
    res.status(200).render("role", {pageName: "Roles Page", pageTitle: "Role"});
    } else {
        res.status(302).redirect("/")
    }
})

exports.adminRouter = router;