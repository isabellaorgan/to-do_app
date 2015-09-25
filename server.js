var express = require('express');
var app = express();

// Says what port this server will listen to
app.set('port', (process.env.PORT || 4000));

// Sets up file path where this server will access things
app.use(express.static(__dirname + '/public'));

// Set a specific action to an endpoint
app.get('secret', function(request, response) {
  response.send('Nothing to-do');
});

// Catch-all 404
app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '/public/404.html');
});

// Call function that makes server begin listening
app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
});
