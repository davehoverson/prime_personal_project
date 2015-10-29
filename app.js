var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;
var User = require('./models/user');

//var index = require('./routes/index');
var data = require('./routes/data');

var app = express();

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/budgetapp";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
  console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//items removed below based on Passport lecture
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    //key: 'user',
    resave: true,
    saveUninitialized: false
    //cookie: {maxAge: 600000, secure: false}  ---> add a comma above
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/routes.js')(app, passport);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-signup', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done){
        process.nextTick(function(){
            User.findOne({ 'local.username' : username }, function(err, user){
                if (err)
                    return done(err);
                if (user){
                    return done(null, false, req.flash('signupMessage', 'That Username is already taken.'));
                } else {
                    var newUser = new User();
                    newUser.local.username = username;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.profile.email = req.body.email;
                    newUser.profile.firstname = req.body.firstname;
                    newUser.profile.lastname = req.body.lastname;
                    newUser.save(function(err){
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        })
}));

passport.use('local-login', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, username, password, done){
        User.findOne({ 'local.username' : username }, function(err, user){
            if (err)
                return done(err);
            if (!user)
                return done(null, false, req.flash('loginMessage', 'Incorrect username or password.'));
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Incorrect username or password.'));
            return done(null, user);
        });
}));

//app.use('/', index);
app.use('/data', data);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
