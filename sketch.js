var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var player1Img ,player2Img, backgroundImg
var player1,player2
var players


function preload(){
player1Img = loadImage("images/player1.png")
player2Img = loadImage("images/player2.png")
backgroundImg = loadImage("images/background.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();

  game = new Game()
  game.getState()
  game.start()

}


function draw(){
  if (playerCount === 2){
    game.update(1)
  }
  if ( gameState===1){
    clear()
    game.play()
  }
  if (gameState===2){
    game.end()
  }

  drawSprites();

}
