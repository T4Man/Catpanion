var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

/*var proxyGoogle = function(request, response) {
  console.log('Routing Google request for', request.params[0]);
  (requestProxy({
    url: 'https://maps.googleapis.com/maps/api/place/details/json' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GOOGLE_TOKEN }
  }))(request, response);
  };
*/

var requestProxy = require('express-request-proxy');

app.get('/pfapi/pets', requestProxy({
    url: 'http://api.petfinder.com/pet.find',
    query: {
      key: config.pfAPI,
      format: 'json',
      output: 'full'
    }
}));

/*app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});
*/
app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var http = require( "http" );
var server = http.createServer(
  function( request, response ){
    var origin = (request.headers.origin || "*");
    if (request.method.toUpperCase() === "OPTIONS"){
      response.writeHead(
        "204",
        "No Content",
      {
        "access-control-allow-origin": origin,
        "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
        "access-control-allow-headers": "content-type, accept",
        "access-control-max-age": 10,
        "content-length": 0
      }
    );
    return( response.end() );
  }
var requestBodyBuffer = [];
  request.on(
    "data",
    function( chunk ){
      requestBodyBuffer.push( chunk );
    }
  );
  request.on(
    "end",
    function() {
      var requestBody = requestBodyBuffer.join( "" );
      var responseBody = (
        "Thank You For The Cross-Domain AJAX Request:\n\n" +
        "Method: " + request.method + "\n\n" +
        requestBody
      );
      response.writeHead(
        "200",
        "OK",
    {
      "access-control-allow-origin": origin,
      "content-type": "text/plain",
      "content-length": responseBody.length
    }
      );
    return( response.end( responseBody ) );
    }
  );
  }
);
server.listen( 8080 );
console.log( "Node.js listening on port 8080" );
