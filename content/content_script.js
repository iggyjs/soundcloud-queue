console.log('called');
$.get(chrome.extension.getURL('templates/notification.html'), function(data) {
    var div = $("div");
    div.append(data);
});

