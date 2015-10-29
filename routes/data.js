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

router.get('/getCategories', function(req, res, next){
    categorySchema.find(function(err, category){
        if (err) throw err;
        res.json(category);
    })
});

router.get('/getYears', function(req, res){
    yearSchema.find(function(err, years){
        if (err) throw err;
        res.json(years);
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
        //console.log("Created category: " + post);
        res.redirect('/home#/current');
    })
});

router.post('/edit', function(req, res, next){
    categorySchema.findById(req.body._id, function (err, cat){
        if (err) throw err;
        //console.log("editing category: " + cat);
        console.log(req.body);
        cat.total = req.body.total;
        cat.actual = req.body.actual;
        cat.save(function (err) {
            if (err) throw (err);
            res.sendStatus(200);
        })
    })
});

router.delete('/remove', function(req, res){
    console.log(req.body);
    categorySchema.find({_id: req.body._id}, function(err, cat){
        if (err) throw err;
        console.log(cat);
        res.sendStatus(200);
    })
});





module.exports = router;