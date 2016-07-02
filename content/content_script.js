console.log(chrome);
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.ping) { sendResponse({ping: true}); return; }
  console.log(request);
});
// console.log('called');
// $.get(chrome.extension.getURL('templates/notification.html'), function(data) {
//     var div = $("div");
//     div.append(data);
// });
// //
