/**
 * Created by peeler on 11/05/15.
 */
var  conditionController = function(Condition){


    var post = function(req, res){
        var condition = new Condition(req.body);

        if(!req.body.name) {
            res.status(400);
            res.send('Title is required');
        }
        else {
            condition.save();
            res.status(201);
            res.send(condition);
        }
    }



    var get = function(req,res){
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
    }
    return {
        post:post,
        get:get
    }
};

module.exports = conditionController;