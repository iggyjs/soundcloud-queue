chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
// console.log('called');
// $.get(chrome.extension.getURL('templates/notification.html'), function(data) {
//     var div = $("div");
//     div.append(data);
// });
// //
