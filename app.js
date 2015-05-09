var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/conditionAPI');

var  Condition = require('./models/conditionModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var conditionRouter = express.Router();

conditionRouter.route('/Conditions')
    .post(function(req,res){
        var condition  = new Condition(req.body);
        console.log(condition);
        res.send(condition);
    })
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

