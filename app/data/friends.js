function User(obj){
    this.name = obj.name;
    this.photo = obj.photo;
    this.scores = obj.scores;

}

User.prototype.getBestMatch = function (friends){
    var match;
    var matchDiff = 1000;
    friends.forEach(friend => {
        if(this !== friend){
            var total = 0;
           for (let i = 0; i < this.scores.length; i++) {
               total += Math.abs(this.scores[i] - friend.scores[1]);
           }

           if(total < matchDiff){
               match = friend;
               matchDiff = total;
           }
        }
    });

    return match;
}

var friends = [
    {
        "name":"Test1",
        "photo":"https://www.mapsofworld.com/world-political-map-new.jpg",
        "scores":
        [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            
        ]
    }, 
    {
        "name":"Test2",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/818wGZK2pGL._SY741_.jpg",
        "scores":
        [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
        ]
    },
    {
        "name":"Test3",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/818wGZK2pGL._SY741_.jpg",
        "scores":
        [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
        ]
    },    
]

module.exports = {
    friends,
    User
}