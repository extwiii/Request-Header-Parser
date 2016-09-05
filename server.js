var express = require('express');
var app = express();
var routes = require('./routes/routes.js');


routes(app);

var port = process.env.PORT || 3000; 

app.listen(port, function () {
  console.log('Node.js listening on port ' + port);
});



