var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
];
//to filter out all of Barcelona players
players.filter(function(player){
    return player.club === 'FC Barcelona';
})
//to create an array with the names of all the players
var playersName = players.map(function(player){
    return player.name;
});