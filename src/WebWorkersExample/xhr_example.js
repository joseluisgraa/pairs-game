//simple XHR request in pure JavaScript
function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        console.log("DONE");
    }
}

//and here is how you use it to load something with ajax
load('index.html', function(xhr) {
    var result = xhr.responseText;
});


/**
 * This version will do it synchronously
 **/
(function() {
    var request = new XMLHttpRequest();
    request.open('GET', '//service.maxymiser.net/cdn/com.britishairways/js/mmapi.js', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        console.log("DONE");
    }
})();
