console.log('called');
$.get(chrome.extension.getURL('templates/notification.html'), function(data) {
    console.log(data);
    $('body').append(data);
});

