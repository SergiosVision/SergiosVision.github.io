var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var io = require('socket.io')();

app.set('port', process.env.PORT || 80 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Sergios Rox';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function(){
   console.log('Server Has Been Started, listening on port:' + app.get('port')); 
});

io.attach(server);
io.on('connection', function(socket){
    socket.on('postMessage', function(data){
       io.emit('updateMessages', data);
    });
});