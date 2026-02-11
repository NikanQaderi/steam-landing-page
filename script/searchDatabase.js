//database
// underContent part
var gamesDatabase = [
    {id:1,gameName:"Dead-Island 2",gamepic:"undercontent01.jpg",gameTags:"FPS, Shooter, Multiplayer, Competitive",gameDetails:""},
    {id:2,gameName:"ARC raiders",gamepic:"undercontent02.jpg",gameTags:"Extraction, Shooter, Multiplayer, PvP, PvE",gameDetails:""},
    {id:3,gameName:"Steam Deck",gamepic:"undercontent03.jpg",gameTags:"Console, Gaming",gameDetails:""},
    {id:4,gameName:"Battlefield 6",gamepic:"undercontent04.jpg",gameTags:"FPS, Multiplayer, Action, Military",gameDetails:""},
    {id:5,gameName:"EA SPORTS FC 26",gamepic:"undercontent05.jpg",gameTags:"Football, Sports, Simulations, Multiplayer",gameDetails:""},
    {id:6,gameName:"Dota 2",gamepic:"undercontent06.jpg",gameTags:"Free to play, MOBA, Multiplayer, Strategy",gameDetails:""},
    {id:7,gameName:"Where Wind Meets",gamepic:"undercontent07.jpg",gameTags:"Open World, Free to Play, Multiplayer, Souls-like",gameDetails:""},
    {id:8,gameName:"Baldurs Gate3",gamepic:"undercontent08.jpg",gameTags:"RPG,Character Customization, Choices Matter, Story Rich",gameDetails:""},
    {id:9,gameName:"Clair Obscur: Expedition 33",gamepic:"undercontent09.jpg",gameTags:"Turn-Based Combat, Story Rich, Fantasy, RPG",gameDetails:""},
    {id:10,gameName:"Marval Rivals",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""},
    {id:11,gameName:"sekiro",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""},
    {id:12,gameName:"eldenring",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""},
    {id:13,gameName:"darksolsouls",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""},
    {id:14,gameName:"undertale",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""},
    {id:15,gameName:"resident Evil",gamepic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""}
]
search = document.getElementById("search");

search.onkeyup = function () {
    searchResult.className = "show";

    var searched = [];
    searched = gamesDatabase.filter(el => 
        el.gameName.toLowerCase().indexOf(this.value.toLowerCase()) != -1 && this.value != ''
    );

    fillSearch(searched);
};

function fillSearch(jsonData) {
    
    searchResult.innerHTML = "";

    if (jsonData.length > 0) {
        let searchTitle = document.createElement("div");
        searchTitle.className = "searchResultTitle";
        searchTitle.innerHTML = "Search results";
        searchResult.appendChild(searchTitle);
    }
    for (i = 0; i < jsonData.length; i++) {
        let searchItems = document.createElement("div");
        searchItems.id = "searchItems";
        
        let image = document.createElement("img");
        image.src = "game-image/undercontent/" + jsonData[i].gamepic;
        image.className = "searchImage";
        
        let span = document.createElement("div");
        span.innerHTML = jsonData[i].gameName;
        span.className = "SearchgameName";

        searchItems.appendChild(image);
        searchItems.appendChild(span);
        searchResult.appendChild(searchItems);
    }
}
// var searchedItem =[];
// var searchResult = document.getElementById("searchResult")
// for( let element of gamesDatabase){
//     if (element.gameName.indexOf(this.value) != -1){
//         searchedItem.push(element.gameName)
//     }
//     searchResult.innerHTML = this.value;
// }
// function fillsearch(jsonData){
//     for(let i = 0; i < gamesDatabase.length ; i++){
//         let searchItems = document.createElement("div")
//         searchItems.className = "searchItems"
//         let image = document.createElement("img")
//         image.src = "game-image/undercontent/" + gamesDatabase[i].pic;
//         let span = document.createElement("span")
//         span.innerHTML = gamesDatabase[i].gameName;
//         searchItems.appendChild(img);
//         searchItems.appendChild(span)
//         searchResult.appendChild(searchItems);
//     }
// }