var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/conditionAPI');

var  Condition = require('./models/conditionModel');

var app = express();
var port = process.env.PORT || 3000;

var conditionRouter = express.Router();

conditionRouter.route('/Conditions')
    .get(function(req,res){
        Condition.find(function(err,conditions){
            if(err)
            res.status(500).send(err)
            else
            res.json(conditions);
        });
    });

app.use('/api', conditionRouter);


app.get('/',function(req,res){
  res.send('welcome to my API');
});

app.listen(port, function(){
  console.log('Gulp is Running on PORT: ' ,port)
});

