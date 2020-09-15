
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pcimage1,pcimage2,pcimage3;
var gameState=0;
var database;
var playerCount=0;
var form,game,player;


function preload()
{
	pcimage1=loadImage("image/player4.png");
	pcimage2=loadImage("image/sitting.png");
	pcimage3=loadImage("image/lay.jpg");
}

function setup() {
	createCanvas(displayWidth-20, displayHeight-30);
	database=firebase.database()
game=new Game();
game.getState()
game.start()	 
}


function draw() {
   background(255);
  
  drawSprites();
 
}




