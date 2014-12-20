//helper things to initiate
var socket = io.connect('localhost:5000');
// create an new instance of a pixi stage
// var stage = new PIXI.Stage(0x3498db,true);

// // create a renderer instance
// var renderer = new PIXI.autoDetectRenderer(1000, 600);

// // add the renderer view element to the DOM
// document.getElementById("gameView").appendChild(renderer.view);

// PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;

// requestAnimFrame( animate );

var hasloaded = false;

enchant();

var game;
// game.preload("images/character2.png");

var playerid = {team: 0, number: 0};
var keysDown = {
    left: false,
    right: false,
    up: false,
    down: false,
    shoot: false,
    q: false,
    recent: "right"
};

var blueteam = [];
var orangeteam = [];
var minionsblueteam = [];
var minionsorangeteam = [];
var bluetowers = [];
var orangetowers = [];
var obstacles = [];
var blueshots = [];
var orangeshots = [];
var bluenexus = [];
var orangenexus = [];

var KevinSprite = Class.create(Sprite, { // declare a custom class called Bear
    initialize:function(){ // initialize the class (constructor)
        Sprite.call(this,256,256); // initialize the sprite
        this.frame = 0;
        this.realx = 0;
        this.realy = 0;
        this.tag = 0;
        this.x = 0;
        this.y = 0;
        game.rootScene.addChild(this);
    }
});



window.onload = function(){

    game = new Core(1000, 600);
    game.fps = 60;
    game.preload("character.png");

    console.log("asdasd2");

    game.onload = function(){

        console.log("as2dasd");

        hasloaded = true;

        for(var i = 0; i < 5; i++)
        {

            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.x = 200;
            bunny.y = 200;
            blueteam.push(bunny);
            // game.rootScene.addChild(bunny);
            console.log("asdasd");
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            orangeteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 0;
            minionsblueteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 1;
            minionsblueteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 2;
            minionsblueteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 0;
            minionsorangeteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 1;
            minionsorangeteam.push(bunny);
        }

        for(var i = 0; i < 5; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bunny.tag = 2;
            minionsorangeteam.push(bunny);
        }

        for (var y = 0; y < 6; y++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bluetowers.push(bunny);
        }

        for (var y = 0; y < 6; y++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            orangetowers.push(bunny);
        }



        for (var y = 0; y < 5; y++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            obstacles.push(bunny);
        }



        for (var y = 0; y < 1; y++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            bluenexus.push(bunny);
        }

        for (var y = 0; y < 1; y++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = 200;
            bunny.realy = 150;
            orangenexus.push(bunny);
        }


    //     var rectangletexture = PIXI.Texture.fromImage("images/map.jpg");
    //     var rectangletexture2 = PIXI.Texture.fromImage("images/map2.jpg");

    //     // var rectangletexture = PIXI.Texture.fromImage("images/herpyrectangle.jpg");
    //     var topRect = new KevinSprite();
    //     topRect.image = game.assets["images/minus.png"];
    //     topRect.realx = 200;
    //     topRect.realy = 150;

    //     var topRect = new PIXI.Sprite(rectangletexture);
    //     topRect.anchor.x = 0.5;
    //     topRect.anchor.y = 0.5;
    //     topRect.position.x = 0;
    //     topRect.position.y = 0;
    //     stage.addChild(topRect);


    //     var botRect = new PIXI.Sprite(rectangletexture2);
    //     botRect.anchor.x = 0;
    //     botRect.anchor.y = 0;
    //     botRect.scale.x = 500;
    //     botRect.scale.y = 500;
    //     botRect.position.x = 0;
    //     botRect.position.y = 500;
    //     stage.addChild(botRect);

    //     var leftRect = new PIXI.Sprite(rectangletexture);
    //     leftRect.rotation = 90 * (Math.PI/180);
    //     leftRect.anchor.x = 0;
    //     leftRect.anchor.y = 0;
    //     leftRect.scale.x = 500;
    //     leftRect.scale.y = 500;
    //     leftRect.position.x = 0;
    //     leftRect.position.y = 0;
    //     stage.addChild(leftRect);

    //     var rightRect = new PIXI.Sprite(rectangletexture2);
    //     rightRect.rotation = 90 * (Math.PI/180);
    //     rightRect.anchor.x = 0;
    //     rightRect.anchor.y = 0;
    //     rightRect.scale.x = 500;
    //     rightRect.scale.y = 500;
    //     rightRect.position.x = 500;
    //     rightRect.position.y = 0;
    //     stage.addChild(rightRect);


        game.rootScene.addEventListener('enterframe', function(){

            socket.emit("clientKeys",{client:playerid, keys:keysDown});

            //find players data stuff
            var player;
            if(playerid.team == 0)
            {
                player = blueteam[playerid.number];
            }
            else if(playerid.team == 1)
            {
                player = orangeteam[playerid.number];
            }

            // console.log(blueshots.length);



            //SCROLLING THINGS
            for(var i = 0; i < 5; i++)
            {
                blueteam[i].x = blueteam[i].realx - (player.realx - 500);
                blueteam[i].y = blueteam[i].realy - (player.realy - 300);

                orangeteam[i].x = orangeteam[i].realx - (player.realx - 500);
                orangeteam[i].y = orangeteam[i].realy - (player.realy - 300);
            }

            for(var i = 0; i < minionsblueteam.length; i++)
            {
                minionsblueteam[i].x = minionsblueteam[i].realx - (player.realx - 500);
                minionsblueteam[i].y = minionsblueteam[i].realy - (player.realy - 300);
            }

            for(var i = 0; i < minionsorangeteam.length; i++)
            {
                minionsorangeteam[i].x = minionsorangeteam[i].realx - (player.realx - 500);
                minionsorangeteam[i].y = minionsorangeteam[i].realy - (player.realy - 300);
            }

            for(var i = 0; i < bluetowers.length; i++)
            {
                bluetowers[i].x = bluetowers[i].realx - (player.realx - 500);
                bluetowers[i].y = bluetowers[i].realy - (player.realy - 300);
            }

            for(var i = 0; i < orangetowers.length; i++)
            {
                orangetowers[i].x = orangetowers[i].realx - (player.realx - 500);
                orangetowers[i].y = orangetowers[i].realy - (player.realy - 300);
            }

            // for(var i = 0; i < obstacles.length; i++)
            // {
            //     // console
            //     obstacles[i].position = new PIXI.Point(obstaclesdata[i].position.x - (player.position.x - 500),obstaclesdata[i].position.y - (player.position.y - 300));
            //     // console.log(bluetowers[i].position);
            // }

            for(var i = 0; i < blueshots.length; i++)
            {
                blueshots[i].x = blueshots[i].realx - (player.realx - 500);
                blueshots[i].y = blueshots[i].realy - (player.realy - 300);
            }

            for(var i = 0; i < orangeshots.length; i++)
            {
                orangeshots[i].x = orangeshots[i].realx - (player.realx - 500);
                orangeshots[i].y = orangeshots[i].realy - (player.realy - 300);
            }

            // for(var i = 0; i < bluenexus.length; i++)
            // {
            //     // console
            //     bluenexus[i].position = new PIXI.Point(bluenexusdata[i].position.x - (player.position.x - 500),bluenexusdata[i].position.y - (player.position.y - 300));

            // }
            // for(var i = 0; i < orangenexus.length; i++)
            // {
            //     // console
            //     orangenexus[i].position = new PIXI.Point(orangenexusdata[i].position.x - (player.position.x - 500),orangenexusdata[i].position.y - (player.position.y - 300));

            // }

            // topRect.position = new PIXI.Point(0 - (player.position.x - 500), 0 - (player.position.y - 300));
            // botRect.position = new PIXI.Point(0 - (player.position.x - 500), 2000 - (player.position.y - 300));
            // leftRect.position = new PIXI.Point(0 - (player.position.x - 500), 0 - (player.position.y - 300));
            // rightRect.position = new PIXI.Point(3000 - (player.position.x - 500), 0 - (player.position.y - 300));

        });
    }
    game.start();
};



//SOCKET CALLBACKS (data = dict with stuff from the server)
socket.on('information', function (data)
{
    if(hasloaded)
    {
        for(var i = 0; i < 5; i++)
        {
            blueteam[i].realx = data.blueteam[i].position.x;
            blueteam[i].realy = data.blueteam[i].position.y;

            orangeteam[i].realx = data.orangeteam[i].position.x;
            orangeteam[i].realy = data.orangeteam[i].position.y;
        }

        for(var i = 0; i < minionsblueteam.length; i++)
        {
            minionsblueteam[i].realx = data.minionsblueteam[i].position.x;
            minionsblueteam[i].realy = data.minionsblueteam[i].position.y;
        }

        for(var i = 0; i < minionsorangeteam.length; i++)
        {
            minionsorangeteam[i].realx = data.minionsorangeteam[i].position.x;
            minionsorangeteam[i].realy = data.minionsorangeteam[i].position.y;
        }

        for(var i = 0; i < bluetowers.length; i++)
        {
            bluetowers[i].realx = data.bluetowers[i].position.x;
            bluetowers[i].realy = data.bluetowers[i].position.y;
        }

        for(var i = 0; i < orangetowers.length; i++)
        {
            orangetowers[i].realx = data.orangetowers[i].position.x;
            orangetowers[i].realy = data.orangetowers[i].position.y;
        }

        // for(var i = 0; i < 5; i++)
        // {

        //     obstaclesdata[i].position = new PIXI.Point(data.obstacles[i].position.x, data.obstacles[i].position.y);

        // }

        // for (var i = 0; i < 1; i++ ) {
        //     bluenexusdata[i].position = new PIXI.Point(data.bluenexus[i].position.x, data.bluenexus[i].position.y);

        // }

        //  for (var i = 0; i < 1; i++ ) {
        //     orangenexusdata[i].position = new PIXI.Point(data.orangenexus[i].position.x, data.orangenexus[i].position.y);

        // }

        for(var i = 0; i < blueshots.length; i++)
        {
            game.rootScene.removeChild(blueshots[i]);
        }

        blueshots = [];

        for(var i = 0; i < data.blueshots.length; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = data.blueshots[i].position.x;
            bunny.realy = data.blueshots[i].position.y;
            blueshots.push(bunny);
        }

        for(var i = 0; i < orangeshots.length; i++)
        {
            game.rootScene.removeChild(orangeshots[i]);
        }

        orangeshots = [];

        for(var i = 0; i < data.orangeshots.length; i++)
        {
            var bunny = new KevinSprite();
            bunny.image = game.assets["character.png"];
            bunny.realx = data.orangeshots[i].position.x;
            bunny.realy = data.orangeshots[i].position.y;
            orangeshots.push(bunny);
        }

    }

});

socket.on('firstClientID', function (data)
{
    playerid.team = data.team;
    playerid.number = data.number;
});






//game start
socket.emit("firstConnect",{});















// Setup Leap loop with frame callback function
// var controllerOptions = {enableGestures: true};

// Leap.loop(controllerOptions, function(frame) {

//     // console.log("ddd");

//   if (frame.gestures.length > 0) {

//     for (var i = 0; i < frame.gestures.length; i++) {
//       var gesture = frame.gestures[i];

//       console.log("adsas");

//       if (gesture.type == "swipe") {
//           //Classify swipe as either horizontal or vertical
//           var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
//           //Classify as right-left or up-down
//           if(isHorizontal)
//           {
//               if(gesture.direction[0] > 0)
//               {
//                   swipeDirection = "right";
//                   console.log('leap shoot right')
//                    shoot = true;

//               }
//               else
//               {
//                   swipeDirection = "left";
//                   console.log('leap shoot left');
//                   shoot = true;


//               }
//           }
//            else
//            { //vertical
//               if(gesture.direction[1] > 0)
//               {
//                   swipeDirection = "up";
//                   console.log('leap shoot up');
//                   shoot = true;


//               }
//               else {
//                   swipeDirection = "down";
//                   console.log('leap shoot down');
//                   keysDown.q = true;

//               }
//           }
//        }
//      }
//   }

// })




//helper functions

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