//import do express
var express = require('express');
//criar um objeto do express.
var app = express();

//ponto de acesso : endpoint
//request é uma requisição
//response é 
app.get('/', function(request, response) {
  response.send('Gustavo Lopes');
});

//
app.listen(3000,function() {
    console.log('Example app listening on port 3000!');
  });
