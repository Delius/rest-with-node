var mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser');

var db;

console.log('Hello');
if(process.env.ENV == 'Test') {

    db = mongoose.connect('mongodb://localhost/conditionAPI_test');
}
else{
    db = mongoose.connect('mongodb://localhost/conditionAPI');
}

var  Condition = require('./models/conditionModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var conditionRouter = require('./routes/conditionRoutes')(Condition);



app.use('/api/conditions', conditionRouter);


app.get('/',function(req,res){
  res.send('welcome to my API');
});

app.listen(port, function(){
  console.log('Gulp is Running on PORT: ' ,port)
});

module.exports = app;