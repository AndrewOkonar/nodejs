var http = require('http');
// var l = require('./l.js');
// var fs = require('fs');
// var mainpage = require('./mainpage.js');

const PORT=8080;

function handleRequest(request, response){

  // var url = request.url;
  // var urls = request.url.split("/");
  //
  // if (url =='/')
  // {
  //   mainpage.mainpage(request, response);
  // }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on : ", PORT);
});
