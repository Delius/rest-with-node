/**
 * Created by peeler on 11/05/15.
 */
var should = require('should'),
    sinon = require('sinon');

describe('Condition Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty name on post', function(){
            var Condition = function(condition){this.save = function(){}};

            var req = {
                body: { author: 'Jon' }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var conditionController = require('../controllers/conditionController')(Condition);

            conditionController.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    })
})