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
    {id:"1",pic:"saleGameItem01",price:"$30.00",off:"-20%",video:"_002.webm",title:"LeagueOfLegends",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"2",pic:"saleGameItem02",price:"$50.00",off:"-20%",video:"_003.webm",title:"Sekiro",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"3",pic:"saleGameItem03",price:"$22.00",off:"-20%",video:"_004.webm",title:"Dark souls",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"4",pic:"saleGameItem04",price:"$10.50",off:"-20%",video:"_005.webm",title:"Clash royale",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"5",pic:"saleGameItem05",price:"$12.40",off:"-20%",video:"_006.webm",title:"Chess",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"6",pic:"saleGameItem06",price:"$11.40",off:"-20%",video:"_007.webm",title:"Life is Strange",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"7",pic:"saleGameItem07",price:"$89.10",off:"-20%",video:"_008.webm",title:"FC 26",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"8",pic:"saleGameItem08",price:"$50.20",off:"-20%",video:"_009.webm",title:"CyberPunk2077",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"9",pic:"saleGameItem09",price:"$99.20",off:"-20%",video:"_010.webm",title:"Detroit",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"10",pic:"saleGameItem10",price:"$33.30",off:"-20%",video:"_011.webm",title:"Hades 2",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"11",pic:"saleGameItem11",price:"$90.33",off:"-20%",video:"_012.webm",title:"Dota 2",points:"100,000",tags:["multiplayer","shooter","openworld"]},
    {id:"12",pic:"saleGameItem12",price:"$25.00",off:"-20%",video:"_013.webm",title:"Signalis",points:"100,000",tags:["multiplayer","shooter","openworld"]},
]
    for(i=0; i < salagameGames; i++){
        
    }
//homePageCards Grid Style
var homePageCards = [
    {id:"01",pic:"_016.jpg",video:"_026.webm"},
    {id:"02",pic:"_017.jpg",video:"_027.webm"},
    {id:"03",pic:"_018.jpg",video:"_028.webm"},
    {id:"04",pic:"_019.jpg",video:"_029.webm"},
    {id:"05",pic:"_020.jpg",video:"_030.webm"},
    {id:"06",pic:"_021.jpg",video:"_031.webm"},
    {id:"07",pic:"_022.jpg",video:"_032.webm"},
    {id:"08",pic:"_023.jpg",video:"_033.webm"},
    {id:"09",pic:"_024.jpg",video:"_034.webm"},
    {id:"10",pic:"_025.jpg",video:"_035.webm"},
    {id:"11",pic:"_026.jpg",video:"_036.webm"},
    {id:"12",pic:"_027.jpg",video:"_037.webm"},
    {id:"13",pic:"_028.jpg",video:"_026.webm"},
    {id:"14",pic:"_029.jpg",video:"_027.webm"},
    {id:"15",pic:"_030.jpg",video:"_028.webm"},
    {id:"16",pic:"_031.jpg",video:"_029.webm"},
    {id:"17",pic:"_032.jpg",video:"_030.webm"},
    {id:"18",pic:"_033.jpg",video:"_031.webm"},
    {id:"19",pic:"_034.jpg",video:"_032.webm"},
    {id:"20",pic:"_020.jpg",video:"_035.webm"}
]

for(i=0;i < homePageCards.length;i++){
    let gameCard = document.createElement("div")
    gameCard.className = "GameCards";
    
    let image = document.createElement("img")
    image.src = "game-image/GameGridCards/capsule_616x353" + homePageCards[i].pic;

    let video = document.createElement("video")
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    let source = document.createElement("source")
    source.src = "videos/gameCards/microtrailer" + homePageCards[i].video
    source.type = "video/webm"

    video.appendChild(source);

    gameCard.appendChild(image)
    gameCard.appendChild(video)

    homePageGameCards.appendChild(gameCard);
}

//featuredSlider Part

var featuredSliderData = [ 
    {id:"01",pic:"_002.jpg",off:"90%",price:"$58.45",offprice:"17.00USD"},
    {id:"02",pic:"_003.jpg",off:"30%",price:"$18.45",offprice:"07.00USD"},
    {id:"03",pic:"_004.jpg",off:"10%",price:"$28.45",offprice:"27.00USD"},
    {id:"04",pic:"_005.jpg",off:"60%",price:"$48.45",offprice:"37.00USD"},
    {id:"05",pic:"_006.jpg",off:"70%",price:"$58.45",offprice:"47.00USD"},
    {id:"06",pic:"_007.jpg",off:"80%",price:"$68.45",offprice:"57.00USD"},
    {id:"07",pic:"_008.jpg",off:"20%",price:"$78.45",offprice:"67.00USD"},
    {id:"08",pic:"_009.jpg",off:"30%",price:"$38.45",offprice:"77.00USD"},
    {id:"09",pic:"_010.jpg",off:"50%",price:"$58.45",offprice:"87.00USD"},
    {id:"10",pic:"_011.jpg",off:"40%",price:"$88.45",offprice:"97.00USD"},
    {id:"11",pic:"_012.jpg",off:"60%",price:"$49.45",offprice:"20.00USD"},
    {id:"12",pic:"_013.jpg",off:"70%",price:"$15.45",offprice:"22.00USD"},
];

let featuredSliderContainer = document.getElementById("featuredSlider");

for(let i = 0; i < featuredSliderData.length; i++){  

    let featureGame = document.createElement("div");
    featureGame.className = "featureGame";
    
    let image = document.createElement("img");
    image.src = "game-image/featuredSlider/capsule_616x353" + featuredSliderData[i].pic;
    image.alt = `Game ${featuredSliderData[i].id}`;

    let featurePriceContainer = document.createElement("div");
    featurePriceContainer.className = "featurePriceCon";

    let off = document.createElement("div");
    off.className = "off-price";
    off.innerHTML = featuredSliderData[i].off; 

    let price = document.createElement("div");
    price.className = "price";
    
    let originalPrice = document.createElement("del");
    originalPrice.innerHTML = featuredSliderData[i].price;

    let discountedPrice = document.createElement("span");
    discountedPrice.innerHTML = featuredSliderData[i].offprice;

    price.appendChild(originalPrice);
    price.appendChild(discountedPrice);

    featurePriceContainer.appendChild(off);
    featurePriceContainer.appendChild(price);

    featureGame.appendChild(image);
    featureGame.appendChild(featurePriceContainer);

    featuredSliderContainer.appendChild(featureGame);
}