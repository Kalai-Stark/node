var http = require('http');
const port = 300;

var server= http.createServer(function(req,res){
  res.writehead(200,{"content-type":"text/html"});
  res.end("heloo kalai welcome to nodejs")
});
server.listen(port);
