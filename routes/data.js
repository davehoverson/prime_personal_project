/**
 * Created by davidhoverson on 10/22/15.
 */
var express = require('express');
var router = express.Router();
var monthSchema = require('../models/months');
var yearSchema = require('../models/years');
var categorySchema = require('../models/categories');
var user = require('../models/user');


router.get('/getMonths', function(req, res, next){
    monthSchema.find(function(err, month){
        if (err) throw err;
            res.json(month);
    })
});

router.get('/getYears', function(req, res){
    yearSchema.find(function(err, years){
        if (err) throw err;
        res.json(years);
    })
});

router.get('/getCategories', function(req, res){
    categorySchema.find(function(err, post){
        if (err) throw err;
        res.json(post);
    })
});

router.post('/addYears', function(req, res){
    console.log(req.body);
    yearSchema.create(req.body, function(err, post){
        console.log("Yo This is the post: " + post);
        res.sendStatus(200);
    })
});

router.post('/addCategories', function(req, res){
    console.log(req.body);
    categorySchema.create(req.body, function(err, post){
        console.log("Created category: " + post);
        res.sendStatus(200);
    })
});


module.exports = router;