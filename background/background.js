function sendMessage(tabId, message, callback){
  chrome.tabs.sendMessage(tabId, {ping: true}, function(response){
    chrome.tabs.sendMessage(tabId, message, callback);
  });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.greeting == "yo")
      sendResponse({farewell: "goodbye"});
  });
// document.getElementById("play").addEventListener("click", function(){
//     document.getElementById("test").innerHTML = "Hello World";
// });

// chrome.tabs.query({url: "http://example.com/"}, function(tabs) {
//   console.log("message sent");
//   sendMessage(tabs[0].id, {greeting: "hello"});
// });