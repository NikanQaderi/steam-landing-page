// underContent part
var underContentgames = [
    {id:1,gameName:"Dead-Island 2",pic:"undercontent01.jpg",gameTags:"FPS, Shooter, Multiplayer, Competitive",gameDetails:""},
    {id:2,gameName:"ARC raiders",pic:"undercontent02.jpg",gameTags:"Extraction, Shooter, Multiplayer, PvP, PvE",gameDetails:""},
    {id:3,gameName:"Steam Deck",pic:"undercontent03.jpg",gameTags:"Console, Gaming",gameDetails:""},
    {id:4,gameName:"Battlefield 6",pic:"undercontent04.jpg",gameTags:"FPS, Multiplayer, Action, Military",gameDetails:""},
    {id:5,gameName:"EA SPORTS FC 26",pic:"undercontent05.jpg",gameTags:"Football, Sports, Simulations, Multiplayer",gameDetails:""},
    {id:6,gameName:"Dota 2",pic:"undercontent06.jpg",gameTags:"Free to play, MOBA, Multiplayer, Strategy",gameDetails:""},
    {id:7,gameName:"Where Wind Meets",pic:"undercontent07.jpg",gameTags:"Open World, Free to Play, Multiplayer, Souls-like",gameDetails:""},
    {id:8,gameName:"Baldurs Gate3",pic:"undercontent08.jpg",gameTags:"RPG,Character Customization, Choices Matter, Story Rich",gameDetails:""},
    {id:9,gameName:"Clair Obscur: Expedition 33",pic:"undercontent09.jpg",gameTags:"Turn-Based Combat, Story Rich, Fantasy, RPG",gameDetails:""},
    {id:10,gameName:"Marval Rivals",pic:"undercontent10.jpg",gameTags:"Free To Play, Multiplayer, Hero Shooter, Third-Person Shooter",gameDetails:""}]
	for (let i = 0; i < underContentgames.length; i++){
            let gameItems = document.createElement("div")
            gameItems.className = "homeTabs-GameItem"
            let images = document.createElement("img")
            images.src = "game-image/undercontent/" + underContentgames[i].pic;
            let gamesContainer = document.createElement("div")
            gamesContainer.className = "homeTabs-GameItem-Container"
            let gameTitle = document.createElement("div")
            gameTitle.innerHTML = underContentgames[i].gameName;
            let Tags = document.createElement("div")
            Tags.innerHTML =  underContentgames[i].gameTags;
            let detail = document.createElement("div")
            detail.innerHTML =  underContentgames[i].gameDetails;
            gamesContainer.appendChild(gameTitle)
            gamesContainer.appendChild(Tags)
            gamesContainer.appendChild(detail)        
            gameItems.appendChild(images)
            gameItems.appendChild(gamesContainer)            
            homeTabsGameList.appendChild(gameItems)
            }

//saleGame part
var salagameGames = [
    {id:"",pic:"",price:"",off:""}
]
