var express = require('express');
var db = require("../models");
var router = express.Router();


router.get("/", function (req, res) {
    db.Burger.findAll().then(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/burgers/insert", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: 0
    }).then(function (data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    db.Burger.update({
        devoured: 1
    },
        {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.sendStatus(200);
        });
});

module.exports = router;