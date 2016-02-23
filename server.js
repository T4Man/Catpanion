var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGoogle = function(request, response) {
  console.log('Routing Google request for', request.params[0]);
  (requestProxy({
    url: 'https://maps.googleapis.com/maps/api/place/details/json' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GOOGLE_TOKEN }
  }))(request, response);
  };

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
