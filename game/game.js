//helper things to initiate
var socket = io.connect('localhost:5000');
// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x3498db,true);

// create a renderer instance
var renderer = new PIXI.autoDetectRenderer(1000, 600);

// add the renderer view element to the DOM
document.getElementById("gameView").appendChild(renderer.view);

PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;

requestAnimFrame( animate );








//global variables
var playerid = {team: 0, number: 0};
//Define the keys pressed
var keysDown = {
    left: false,
    right: false,
    up: false,
    down: false,
    shoot: false,
    q: false,
    recent: "right"
};

//Add the team and the DATA
var blueteamdata = [];

var orangeteamdata = [];

var blueteam = [];

var orangeteam = [];

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character2.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    bunny.scale.x = 0.2;
    bunny.scale.y = 0.2;

    stage.addChild(bunny);

    blueteam.push(bunny);
}


for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    bunny.scale.x = 0.2;
    bunny.scale.y = 0.2;

    stage.addChild(bunny);

    orangeteam.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("player.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    blueteamdata.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("orange.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    orangeteamdata.push(bunny);
}

//Initialize the variable AND THE DATA
var minionsblueteamdata = [];

//Initialize the variable AND THE DATA
var minionsorangeteamdata = [];

//Initialize the variable AND THE DATA
var minionsblueteam = [];

//Initialize the variable AND THE DATA
var minionsorangeteam = [];

//Initialize the variable AND THE DATA
var minionsblueteam2 = [];

//Initialize the variable AND THE DATA
var minionsorangeteam2 = [];

//Initialize the variable AND THE DATA
var minionsblueteam2data = [];

//Initialize the variable AND THE DATA
var minionsorangeteam2data = [];

//Initialize the variable AND THE DATA
var minionsblueteam3 = [];

//Initialize the variable AND THE DATA
var minionsorangeteam3 = [];

//Initialize the variable AND THE DATA
var minionsblueteam3data = [];

//Initialize the variable AND THE DATA
var minionsorangeteam3data = [];

//Initialize the variable AND THE DATA
var bluetowers = [];

//Initialize the variable AND THE DATA
var bluetowersdata = [];

//Initialize the variable AND THE DATA
var orangetowers = [];

//Initialize the variable AND THE DATA
var obstacles = [];

//Initialize the variable AND THE DATA
var obstaclesdata = [];

//Initialize the variable AND THE DATA
var blueshots = [];
var blueshotsdata = [];
//Initialize the variable AND THE DATA
var orangeshots = [];
var orangeshotsdata =[];
//Initialize the variable AND THE DATA
var orangetowersdata = [];

//Initialize the variable AND THE DATA
var bluenexus = [];
var bluenexusdata = [];
//Initialize the variable AND THE DATA
var orangenexus = [];
var orangenexusdata = [];



for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("player.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteamdata.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("orange.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteamdata.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character3.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteam.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character5.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteam.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("player.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteam2data.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("orange.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteam2data.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character3.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteam2.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character5.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteam2.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("player.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteam3data.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character5.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteam3data.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character3.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsblueteam3.push(bunny);
}

for(var i = 0; i < 5; i++)
{
    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("images/character5.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    minionsorangeteam3.push(bunny);
}

for (var y = 0; y < 6; y++)
{
    ///////////////////////////////////////
    ///////BLUE TOWER/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("tower2.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 10;
    bunny.scale.y = 10;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    bluetowers.push(bunny);

}

for (var y = 0; y < 6; y++)
{
    ///////////////////////////////////////
    ///////BLUE TOWER/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("orange.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    bluetowersdata.push(bunny);

}





for (var y = 0; y < 6; y++)
{
    ///////////////////////////////////////
    ///////ORANGE TOWER/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("tower.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 10;
    bunny.scale.y = 10;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    orangetowers.push(bunny);

}

for (var y = 0; y < 6; y++)
{
    ///////////////////////////////////////
    ///////ORANGE TOWER/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("tower.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    orangetowersdata.push(bunny);

}








for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////OBSTACLES/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("herpyrectangle.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0.7;
    bunny.scale.y = 0.15;

    bunny.scale.x = 0.15;
    bunny.scale.y = 0.15;



    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    obstacles.push(bunny);

}

for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////OBSTACLES/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("herpyrectangle.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    obstaclesdata.push(bunny);

}

















for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////BLUE NEXUS/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("plus.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x =  10;
    bunny.scale.y =  10;

    bunny.scale.x = 0.15;
    bunny.scale.y = 0.15;



    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    bluenexus.push(bunny);

}

for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////BLUE NEXUS/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("plus.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    bluenexusdata.push(bunny);

}








for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////ORANGE NEXUS/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("minus.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x =  10;
    bunny.scale.y =  10;

    bunny.scale.x = 0.15;
    bunny.scale.y = 0.15;



    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    orangenexus.push(bunny);

}

for (var y = 0; y < 5; y++)
{
    ///////////////////////////////////////
    ///////Orange NEXUS/////////////////////
    /////////////////////////////////////
     var texture = PIXI.Texture.fromImage("plus.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.scale.x = 0;
    bunny.scale.y = 0;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    orangenexusdata.push(bunny);

}















//Initialize the map images
var rectangletexture = PIXI.Texture.fromImage("images/map.jpg");
var rectangletexture2 = PIXI.Texture.fromImage("images/map2.jpg");

<<<<<<< HEAD
// var rectangletexture = PIXI.Texture.fromImage("images/herpyrectangle.jpg");
=======
>>>>>>> FETCH_HEAD

//Initialize the images for the obstacles
var rectangletexture = PIXI.Texture.fromImage("images/herpyrectangle.jpg");

//The will add the top border
var topRect = new PIXI.Sprite(rectangletexture);
topRect.anchor.x = 0.5;
topRect.anchor.y = 0.5;
topRect.position.x = 0;
topRect.position.y = 0;
stage.addChild(topRect);

//This will add the bottom border
var botRect = new PIXI.Sprite(rectangletexture2);
botRect.anchor.x = 0;
botRect.anchor.y = 0;
botRect.scale.x = 500;
botRect.scale.y = 500;
botRect.position.x = 0;
botRect.position.y = 500;
stage.addChild(botRect);

//This will add the left border
var leftRect = new PIXI.Sprite(rectangletexture);
leftRect.rotation = 90 * (Math.PI/180);
leftRect.anchor.x = 0;
leftRect.anchor.y = 0;
leftRect.scale.x = 500;
leftRect.scale.y = 500;
leftRect.position.x = 0;
leftRect.position.y = 0;
stage.addChild(leftRect);

//This will add the right border
var rightRect = new PIXI.Sprite(rectangletexture2);
rightRect.rotation = 90 * (Math.PI/180);
rightRect.anchor.x = 0;
rightRect.anchor.y = 0;
rightRect.scale.x = 500;
rightRect.scale.y = 500;
rightRect.position.x = 500;
rightRect.position.y = 0;
stage.addChild(rightRect);






//SOCKET CALLBACKS (data = dict with stuff from the server)
socket.on('information', function (data)
{
    for(var i = 0; i < 5; i++)
    {
        //These are all the variables that are being returned from the server this is VERY IMPORTANT
        blueteamdata[i].position = new PIXI.Point(data.blueteam[i].position.x,data.blueteam[i].position.y);
        orangeteamdata[i].position = new PIXI.Point(data.orangeteam[i].position.x,data.orangeteam[i].position.y);

        minionsblueteamdata[i].position = new PIXI.Point(data.minionsblueteam[i].position.x,data.minionsblueteam[i].position.y);
        minionsorangeteamdata[i].position = new PIXI.Point(data.minionsorangeteam[i].position.x,data.minionsorangeteam[i].position.y);

        minionsblueteam2data[i].position = new PIXI.Point(data.minionsblueteam2[i].position.x,data.minionsblueteam2[i].position.y);
        minionsorangeteam2data[i].position = new PIXI.Point(data.minionsorangeteam2[i].position.x,data.minionsorangeteam2[i].position.y);

        minionsblueteam3data[i].position = new PIXI.Point(data.minionsblueteam3[i].position.x,data.minionsblueteam3[i].position.y);
        minionsorangeteam3data[i].position = new PIXI.Point(data.minionsorangeteam3[i].position.x,data.minionsorangeteam3[i].position.y);
    }

    for(var i = 0; i < 6; i++)
    {
        //These are all the variables that are being returned from the server this is VERY IMPORTANT
        bluetowersdata[i].position = new PIXI.Point(data.bluetowers[i].position.x, data.bluetowers[i].position.y);
        orangetowersdata[i].position = new PIXI.Point(data.orangetowers[i].position.x, data.orangetowers[i].position.y);
    }
    for(var i = 0; i < 5; i++)
    {
        //These are all the variables that are being returned from the server this is VERY IMPORTANT
        obstaclesdata[i].position = new PIXI.Point(data.obstacles[i].position.x, data.obstacles[i].position.y);

    }

    for (var i = 0; i < 1; i++ ) {
<<<<<<< HEAD
        //These are all the variables that are being returned from the server this is VERY IMPORTANT
        bluenexusdata[i].position = new PIXI.Point(data.bluenexusdata[i].position.x, data.bluenexusdata[i].position.y);
=======
        bluenexusdata[i].position = new PIXI.Point(data.bluenexus[i].position.x, data.bluenexus[i].position.y);
>>>>>>> 4453b089ab339ca90532c7c9b8fb7db628409c5c

    }

     for (var i = 0; i < 1; i++ ) {
<<<<<<< HEAD
        //These are all the variables that are being returned from the server this is VERY IMPORTANT
        orangenexusdata[i].position = new PIXI.Point(data.orangenexusdata[i].position.x, data.orangenexusdata[i].position.y);
=======
        orangenexusdata[i].position = new PIXI.Point(data.orangenexus[i].position.x, data.orangenexus[i].position.y);
>>>>>>> 4453b089ab339ca90532c7c9b8fb7db628409c5c

    }

    for(var i = 0; i < blueshots.length; i++)
    {
        //Removing the bullets
        stage.removeChild(blueshots[i]);
    }
    for(var i = 0; i < blueshotsdata.length; i++)
    {
        //Removing the bullets
        stage.removeChild(blueshotsdata[i]);
    }

    blueshots = [];
    blueshotsdata = [];

    for(var i = 0; i < data.blueshots.length; i++)
    {
        ///////ADDING THE BLUE BULLETS
        // console.log(data.blueshots);
        var texture = PIXI.Texture.fromImage("orange.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        bunny.scale.x = 0;
        bunny.scale.y = 0;

        // move the sprite t the center of the screen
        bunny.position.x = data.blueshots[i].position.x;
        bunny.position.y = data.blueshots[i].position.y;

        stage.addChild(bunny);

        blueshotsdata[i] = bunny;
    }

    for(var i = 0; i < data.blueshots.length; i++)
    {
        //This what happens when the nexus is destroyed
        var texture = PIXI.Texture.fromImage("lastexplosion.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        bunny.scale.x = 4;
        bunny.scale.y = 4;

        // move the sprite t the center of the screen
        bunny.position.x = data.blueshots[i].position.x;
        bunny.position.y = data.blueshots[i].position.y;

        stage.addChild(bunny);

        // blueshots.push(bunny);
        blueshots[i] = bunny;
    }


    for(var i = 0; i < orangeshots.length; i++)
    {
        //Removing the orange bullets
        stage.removeChild(orangeshots[i]);
    }
    for(var i = 0; i < orangeshotsdata.length; i++)
    {
        //Removing the orange bullets
        stage.removeChild(orangeshotsdata[i]);
    }

    orangeshots = [];
    orangeshotsdata = [];

    for(var i = 0; i < data.orangeshots.length; i++)
    {
        //This is the code to add the orange bullets
        // console.log(data.blueshots);
        var texture = PIXI.Texture.fromImage("orange.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        bunny.scale.x = 0;
        bunny.scale.y = 0;

        // move the sprite t the center of the screen
        bunny.position.x = data.orangeshots[i].position.x;
        bunny.position.y = data.orangeshots[i].position.y;

        stage.addChild(bunny);

        orangeshotsdata[i] = bunny;
    }

    for(var i = 0; i < data.orangeshots.length; i++)
    {
        var texture = PIXI.Texture.fromImage("lastexplosion.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        bunny.scale.x = 4;
        bunny.scale.y = 4;

        // move the sprite t the center of the screen
        bunny.position.x = data.orangeshots[i].position.x;
        bunny.position.y = data.orangeshots[i].position.y;

        stage.addChild(bunny);

        // blueshots.push(bunny);
        orangeshots[i] = bunny;
    }

});

socket.on('firstClientID', function (data)
{
    playerid.team = data.team;
    playerid.number = data.number;
});






//game start
socket.emit("firstConnect",{});


















//update
function animate() {

    requestAnimFrame( animate );

    // tell the server what keys im putting down

    socket.emit("clientKeys",{client:playerid, keys:keysDown});

    //find players data stuff
    var player;
    if(playerid.team == 0)
    {
        //Find player data
        player = blueteamdata[playerid.number];
    }
    else if(playerid.team == 1)
    {
        //Find player data
        player = orangeteamdata[playerid.number];
    }

    // console.log(blueshots.length);



    //SCROLLING THINGS
    for(var i = 0; i < 5; i++)
    {
        blueteam[i].position = new PIXI.Point(blueteamdata[i].position.x - (player.position.x - 500),blueteamdata[i].position.y - (player.position.y - 300));
        orangeteam[i].position = new PIXI.Point(orangeteamdata[i].position.x - (player.position.x - 500),orangeteamdata[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsblueteam.length; i++)
    {
        minionsblueteam[i].position = new PIXI.Point(minionsblueteamdata[i].position.x - (player.position.x - 500),minionsblueteamdata[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsorangeteam.length; i++)
    {
        minionsorangeteam[i].position = new PIXI.Point(minionsorangeteamdata[i].position.x - (player.position.x - 500),minionsorangeteamdata[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsblueteam.length; i++)
    {
        minionsblueteam2[i].position = new PIXI.Point(minionsblueteam2data[i].position.x - (player.position.x - 500),minionsblueteam2data[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsorangeteam.length; i++)
    {
        minionsorangeteam2[i].position = new PIXI.Point(minionsorangeteam2data[i].position.x - (player.position.x - 500),minionsorangeteam2data[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsblueteam.length; i++)
    {
        minionsblueteam3[i].position = new PIXI.Point(minionsblueteam3data[i].position.x - (player.position.x - 500),minionsblueteam3data[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < minionsorangeteam.length; i++)
    {
        minionsorangeteam3[i].position = new PIXI.Point(minionsorangeteam3data[i].position.x - (player.position.x - 500),minionsorangeteam3data[i].position.y - (player.position.y - 300));
    }

    for(var i = 0; i < bluetowers.length; i++)
    {
        // console
        bluetowers[i].position = new PIXI.Point(bluetowersdata[i].position.x - (player.position.x - 500),bluetowersdata[i].position.y - (player.position.y - 300));
        // console.log(bluetowers[i].position);
    }

    for(var i = 0; i < orangetowers.length; i++)
    {
        // console
        orangetowers[i].position = new PIXI.Point(orangetowersdata[i].position.x - (player.position.x - 500),orangetowersdata[i].position.y - (player.position.y - 300));
        // console.log(bluetowers[i].position);
    }

     for(var i = 0; i < obstacles.length; i++)
    {
        // console
        obstacles[i].position = new PIXI.Point(obstaclesdata[i].position.x - (player.position.x - 500),obstaclesdata[i].position.y - (player.position.y - 300));
        // console.log(bluetowers[i].position);
    }

    for(var i = 0; i < blueshots.length; i++)
    {
        // console
        blueshots[i].position = new PIXI.Point(blueshotsdata[i].position.x - (player.position.x - 500),blueshotsdata[i].position.y - (player.position.y - 300));
        // console.log(blueshots[i].position);
        console.log(blueshots.length);
    }

    for(var i = 0; i < orangeshots.length; i++)
    {
        // console
        orangeshots[i].position = new PIXI.Point(orangeshotsdata[i].position.x - (player.position.x - 500),orangeshotsdata[i].position.y - (player.position.y - 300));
        // console.log(blueshots[i].position);
        console.log(orangeshots.length);
    }

    for(var i = 0; i < bluenexus.length; i++)
    {
        // console
        bluenexus[i].position = new PIXI.Point(bluenexusdata[i].position.x - (player.position.x - 500),bluenexusdata[i].position.y - (player.position.y - 300));

    }
    for(var i = 0; i < orangenexus.length; i++)
    {
        // console
        orangenexus[i].position = new PIXI.Point(orangenexusdata[i].position.x - (player.position.x - 500),orangenexusdata[i].position.y - (player.position.y - 300));

    }

    topRect.position = new PIXI.Point(0 - (player.position.x - 500), 0 - (player.position.y - 300));
    botRect.position = new PIXI.Point(0 - (player.position.x - 500), 2000 - (player.position.y - 300));
    leftRect.position = new PIXI.Point(0 - (player.position.x - 500), 0 - (player.position.y - 300));
    rightRect.position = new PIXI.Point(3000 - (player.position.x - 500), 0 - (player.position.y - 300));



    // console.log(player.position);


    // render the stage
    renderer.render(stage);
}
/*
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////THIS IS OPTIONAL LEAP MOTION CODE YOU DONT NEED IT/////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


*/


// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {

    // console.log("ddd");

  if (frame.gestures.length > 0) {

    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];

      console.log("adsas");

      if (gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if(isHorizontal)
          {
              if(gesture.direction[0] > 0)
              {
                  swipeDirection = "right";
                  console.log('leap shoot right')
                   shoot = true;

              }
              else
              {
                  swipeDirection = "left";
                  console.log('leap shoot left');
                  shoot = true;


              }
          }
           else
           { //vertical
              if(gesture.direction[1] > 0)
              {
                  swipeDirection = "up";
                  console.log('leap shoot up');
                  shoot = true;


              }
              else {
                  swipeDirection = "down";
                  console.log('leap shoot down');
                  keysDown.q = true;

              }
          }
       }
     }
  }

})




//helper functions
/*




////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////THIS IS WHERE WE DETECT KEYSTROKES/////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

*/
document.addEventListener('keydown', function(event) {

    if(event.keyCode == 37) {
        keysDown.left = true;
        keysDown.recent = "left";
        // console.log("left");
    }
    if(event.keyCode == 39) {
        keysDown.right = true;
        keysDown.recent = "right";
    }
    if(event.keyCode == 40) {
        keysDown.up = true;
        keysDown.recent = "up";
    }
    if(event.keyCode == 38) {
        keysDown.down = true;
        keysDown.recent = "down";
    }
    if(event.keyCode == 81) {
        keysDown.q = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {
        keysDown.left = false;
    }
    if(event.keyCode == 39) {
        keysDown.right = false;
    }
    if(event.keyCode == 40) {
        keysDown.up = false;
    }
    if(event.keyCode == 38) {
        keysDown.down = false;
    }
    if(event.keyCode == 81) {
        keysDown.q = false;
    }
});