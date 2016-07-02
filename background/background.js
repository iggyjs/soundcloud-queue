function sendMessage(tabId, message, callback){
  chrome.tabs.sendMessage(tabId, {ping: true}, function(response){
    chrome.tabs.sendMessage(tabId, message, callback);
  });
}

console.log($.fn.jquery);
chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
  console.log("message sent");
  sendMessage(tabs[0].id, {greeting: "hello"});
});