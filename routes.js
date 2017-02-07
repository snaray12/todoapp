var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

var Todo = require('./models/todo');
var todoController = require('./controller/todo');
var config = require('./config/authsecret');

// serialize and deserialize
passport.serializeUser(function(user, done) {
	console.log('serialize user ' + user.token + '\t' + user.tokenSecret);
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// config
passport.use(new TwitterStrategy({
  consumerKey: config.twitterAuth.clientID,
  consumerSecret    : config.twitterAuth.clientSecret,
  callbackURL     : config.twitterAuth.callbackURL,
  },
  function(oauth_token, oauth_verifier, profile, done) {
    process.nextTick(function () {
      console.log(oauth_token);
      profile.token = oauth_token;
      profile.tokenSecret = oauth_verifier;
      return done(null, profile);
    });
  }
));


module.exports = function(app) {
	app.use(passport.initialize());
	app.use(passport.session());
	app.get('/api/todos', passport.authenticate('twitter'));
	app.get('/api/success', todoController.get);

	app.post('/api/todos', todoController.add);

	app.get('/auth/tweet/callback', passport.authenticate('twitter', { failureRedirect: '/', successRedirect:'/api/success' }));

	app.delete('/api/todos/:todo_id', todoController.delete);
};