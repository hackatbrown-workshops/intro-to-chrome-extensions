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
});