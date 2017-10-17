const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20'),
    config = require('./config');


passport.use(
    new GoogleStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENTSECRET,
        callbackURL: config.CALLBACK_URL
    }, () => {
        // passport callback function
    })
)