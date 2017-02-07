var port = process.env.PORT || 5000

module.exports = {
	'port': port,
    'twitterAuth' : {
        'clientID'      : process.env.clientID,
        'clientSecret'  : process.env.clientSecret,
        'callbackURL'   : 'http://localhost:'+port+'/auth/tweet/callback'
    }
};
