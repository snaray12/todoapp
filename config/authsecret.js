var port = process.env.PORT || 5000

module.exports = {
	'port': port,
    'twitterAuth' : {
        'clientID'      : '',
        'clientSecret'  : '',
        'callbackURL'   : 'http://localhost:'+port+'/auth/tweet/callback'
    }
};
