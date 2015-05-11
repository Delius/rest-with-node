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
                    res.status(500).send(err);
                else
                    res.json(conditions);
            });
        });

    conditionRouter.use('/:conditionID', function(req,res,next){
        Condition.findById(req.params.conditionID, function(err,condition){
            if(err)
                res.status(500).send(err);
            else if(condition)
            {
                req.condition = condition;
                next();
            }
            else
            {
                res.status(404).send('no condition found');
            }
        });
    });

    conditionRouter.route('/:conditionID')
        .get(function(req,res){

            res.json(req.condition);

        })
        .put(function(req,res) {
            req.condition.name = req.body.name;
            req.condition.author = req.body.author;
            req.condition.filled = req.body.filled;
            req.condition.save(function(err){
                if(err)
                    res.status(500).send(err);
                else {
                    res.json(req.condition)
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.condition[p] = req.body[p];
            }

            req.condition.save(function(err){
                if(err)
                res.status(500).send(err);
                else {
                    res.json(req.condition)
                }
            });
        });
    return conditionRouter;
};

module.exports = routes;