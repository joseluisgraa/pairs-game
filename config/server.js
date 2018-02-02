var express = require('express');
var app = express();
var liveReload = require('connect-livereload')();

app.use(liveReload);

// Define the port to run on
app.set('port', 3000);

app.use(express.static('build'));

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});