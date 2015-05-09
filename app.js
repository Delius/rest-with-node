var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/conditionAPI');

var  Condition = require('./models/conditionModel');

var app = express();
var port = process.env.PORT || 3000;

var conditionRouter = express.Router();

conditionRouter.route('/Conditions')
    .get(function(req,res){
        var query = {};

        if(req.query.author)
        {
            query.author = req.query.author;
        }
        Condition.find(query, function(err,conditions){
            if(err)
            res.status(500).send(err)
            else
            res.json(conditions);
        });
    });

conditionRouter.route('/Conditions/:conditionID')
    .get(function(req,res){

        Condition.findDyId(req.params.conditionID, function(err,condition){
            if(err)
                res.status(500).send(err)
            else
                res.json(condition);
        });
    });

app.use('/api', conditionRouter);


app.get('/',function(req,res){
  res.send('welcome to my API');
});

app.listen(port, function(){
  console.log('Gulp is Running on PORT: ' ,port)
});

