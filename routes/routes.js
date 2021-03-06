/**
 * Created by davidhoverson on 10/20/15.
 */
var path = require('path');

module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.redirect('/login');
    });

    app.get('/login', function(req, res){
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/home#/current',
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/signup', function(req, res){
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    app.get('/home', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    //app.get('*', isLoggedIn, function(req, res) {
    //    res.sendFile(path.join(__dirname, "../public/views/index.html"));
    //});

    /* handle root angular route redirects */
    //app.get('/home/*', isLoggedIn, function(req, res, next){
    //    var url = req.originalUrl;
    //    if (url.split('.').length > 1){
    //        next();
    //    } else {
    //        // handles angular urls. i.e. anything without a '.' in the url (so static files aren't handled)
    //        console.log('Catch all handled url: ' + url);
    //        res.redirect('/#' + url);
    //    }
    //});
    //
    //console.log('Route * loaded.');
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
    //console.log("I am not authenticated!")
}