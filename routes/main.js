const express = require("express");
const { getUserDetails, validateUserDetail, setUserDetails } = require("../controller/login");

const router = express.Router();
const loggedInUser = {detail: {}};
router.get("/", (req, res, next) => {
    res.status(200).render("login", {pageName: "Login Page", pageTitle: "Login"});
});

router.get("/register", (req, res, next) => {
   res.status(200).render("register", {pageName: "Registration Page", pageTitle: "Register" })
 });

router.post("/register", (req, res, next) => {    
   setUserDetails(req.body, () => {    
    res.status(302).redirect("/");
   });
});

router.post("/login", (req, res, next) => {
    loggedInUser.detail = {};
    validateUserDetail(req.body, (userDetail) =>  {
        if(!userDetail){
            res.status(302).redirect("/")
        } else {
            loggedInUser.detail = {...userDetail};
           console.log(loggedInUser.detail)
            res.redirect("/home")
        }
    });
});

router.get("/logout", (req, res, next) => {
    loggedInUser.detail = {};
    res.status(302).redirect("/");
});

router.get("/home", (req, res, next)=>{
    if(loggedInUser.detail && loggedInUser.detail.isLoggedIn){
        res.status(200).render("home", {pageName: "Home Page", pageTitle: "Home"});
    } else {
        res.status(302).redirect("/")
    }
   
});

module.exports = {
    mainRouter: router,
    loggedInUser: loggedInUser
}