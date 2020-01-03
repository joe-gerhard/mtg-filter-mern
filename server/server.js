const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
})

passport.deserializeUser((user, cb) => {
  cb(null, user);
})


// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: "/auth/google/callback",
}, 
  (accessToken, refreshToken, profile, cb) => {
    console.log(JSON.stringify(profile))
    user = { ...profile };
    return cb(null, profile);
  }  
))

const app = express();

app.use(cors());
app.use(passport.initialize());
 
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../build')));

app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
})); 

app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: '/profile',
  failureRedirect: '/',
}));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
})