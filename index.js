var http = require('http');
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.server = http.createServer(app);

//configuration d'express
//__dirname est le chemin du dossier parent du fichier serveur
//permet de renvoyer les fichiers à partir du dossier public
app.use('/', express.static(__dirname + './public'));

app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.server.listen(process.env.PORT || 8000);
console.log(`Server started on port ${app.server.address().port}`);
