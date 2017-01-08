# This is code for an extension I built for the Google Chrome web browser!
# Extensions are small programs that help personalize your browsing experieince.
# This extension tweets the current link you are looking at. 

1) First create your manifest.json file: make sure you specify the
manifest_version, name, and version
2) After you decide what your chrome extension will do, update the permissions.
In this example, we specify tabs and Twitter.com since we will be making calls 
using the chrome.tabs API and Twitter API
3) In this example, we do a browser_action. Alternatively, you could do a page_action.
The browser_action allows us to put icons on the top right hand corner, have a tooltip,
badge, or popup. 
4) At this point, you can checkout chrome://extensions/, click on load unpacked
extension, point it to the folder with your manifest.json, click reload, and you
should see your extension on the top right hand corner
5) Create your popup.html. In this example we change the background color,
add a bit of a text, and get ready to make our chrome.tabs API call by creating
our popup.js file
6) Take a look at the code in the popup.js file to understand how to get the
current link in the tab you are looking at
7) Next, add some code to Tweet the link that the chromes.tabs.query() returns to you
8) Twit is Twitter's API client for node, do an *npm install Twit* in your command 
line
9) Take a look at how to update your status using Twit --- also make sure you have
a Twitter account, that your account is connected with your phone, and that you 
get your consumer_key/consumer_secret/access_token/access_token_secret by visiting
https://apps.twitter.com/
10) You might be getting a 'require' error, now it's time to an *npm install browserify*
11) Browserify will basically bundle all your code and the code needed for Twit,
go into your directory and do *browserify popup.js -o bundle.js*
12) You will now have a bundle.js file in your directory (all your code in popup.js
now exists in bundle.js) so change popup.js in your popup.html file to bundle.js
13) You are all set! Remember to constantly reload your chrome extension in
chrome://extensions/ when you make any changes, you should be able to Tweet
what you are looking at :D


** HOW TO DEBUG? put some print statements by calling console.log("some text") in your .js file,
and right click on your chrome extension icon, click on inspect, then check out the console -- you should
get error messages and your print statements in there! 

