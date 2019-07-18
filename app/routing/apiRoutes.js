



var friends = require('../data/friends.js').friends;
var User = require('../data/friends.js').User;



module.exports = function (app){

app.get('/api/friends', function(req, res){
    res.json(friends);
})

app.post('/api/friends', function(req, res){
    var newUser = new User(req.body);
    var match = newUser.getBestMatch(friends);
    friends.push(newUser);

    res.json(match);

})


};
