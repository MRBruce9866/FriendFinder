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
        "name":"Master Chief",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/818wGZK2pGL._SY741_.jpg",
        "scores":
        [
            1,
            2,
            3,
            4,
            5,
            5,
            4,
            3,
            2,
            1,
            
        ]
    }, 
   
]

module.exports = {
    friends,
    User
}