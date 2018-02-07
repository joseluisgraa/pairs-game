self.addEventListener('message', function(e) {
    console.log("primero esto");

    // ASYNC
    // REQUEST AND THEN SEND RESPONSE
    /*var req = new XMLHttpRequest();
    req.open('GET', '//service.maxymiser.net/cdn/com.britishairways/js/mmapi.js2', true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200)
                self.postMessage(req.responseText);
            else
                self.postMessage("Error loading page\n");
        }
    };
    req.send(null);*/

    // SYNC
    // REQUEST AND SEND RESPONSE
    // It is async anyway because the worker doesn't block anything...
    var request = new XMLHttpRequest();
    request.open('GET', '//service.maxymiser.net/cdn/com.britishairways/js/mmapi.js', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        self.postMessage(request.responseText);
    }

    //Return plain data
    //self.postMessage(e.data);

}, false);