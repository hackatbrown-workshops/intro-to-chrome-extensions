// documentation on the chrome.tabs API: https://developer.chrome.com/extensions/tabs
chrome.tabs.query({'active': true}, function (tabs) {
    document.getElementById('savedLinks').innerHTML = tabs[0].url;
    // ^^ populate 'savedLinks' with the first element of tabs which is returned
    // when chroms.tabs.query is called

    var data = tabs[0].url; 
    console.log(data); 
    // ^^ do a bit of chrome extension debugging by putting
    // console.log(), right click on your popup and click 'inspect'
    // then look at the console, you should see the current link
    // you are looking at printed

    var Twit = require('twit');
    // twit is Twitter's API client for node
    // EXTRA: more on Twit:
    // https://github.com/ttezel/twit/blob/master/README.md
    // https://github.com/ttezel/twit

    // do an 'npm install twit'

    // generate keys 
    // 1. go to https://apps.twitter.com/
    // 2. log in with your twitter account
    // 3. go to settings, mobile, add phone number -- you will be unable to use the
    //    Twitter API if your account is not connected with your phone
    // 4. go to keys and access tokens
    // 5. copy and paste your consumer key/consumer_secret
    // 6. click on generate access tokens and copy and paste them
    //    here as well
    var T = new Twit({
      consumer_key:         'consumer_key',
      consumer_secret:      'consumer_secret',
      access_token:         'access_token',
      access_token_secret:  'access_token_secret',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })

    //
    //  tweet your link (update your status) which is stored in data
    //
    T.post('statuses/update', { status: data }, { mode: 'no-cors' }, function(err, data, response) {
      console.log(data)
    }) 

});