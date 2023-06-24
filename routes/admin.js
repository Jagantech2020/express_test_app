const express = require("express");

const router = express.Router();

router.get("/settings", (req, res, next) => {
    res.status(200).render("settings", {pageName: "Settings Page", pageTitle: "Settings"});
});

router.get("/role", (req, res, next) => {
    res.status(200).render("role", {pageName: "Roles Page", pageTitle: "Role"});
})

exports.adminRouter = router;