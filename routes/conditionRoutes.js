/**
 * Created by peeler on 09/05/15.
 */
var express = require('express');

var routes = function(Condition){
    var conditionRouter = express.Router();

    conditionRouter.route('/')
        .post(function(req,res){
            var condition  = new Condition(req.body);


            condition.save();
            res.status(201).send(condition);

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

    conditionRouter.route('/:conditionID')
        .get(function(req,res){

            Condition.findById(req.params.conditionID, function(err,condition){
                if(err)
                    res.status(500).send(err)
                else
                    res.json(condition);
            });
        });
    return conditionRouter;
};

module.exports = routes;