var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Condition = mongoose.model('Condition'),
    agent = request.agent(app);


describe('Condition Crud Test', function(){
    it('Should allow a condition to be posted and return a read and _id', function(done){
        var Condition = { name:'new Book', author:'Jon'};

        agent.post('/api/conditions')
            .send(Condition)
            .expect(201)
            .end(function(err, res){
                if (err) return done(err);
                done()
            })
    })

    afterEach(function(done){
        Condition.remove().exec();
        done();
    })
})