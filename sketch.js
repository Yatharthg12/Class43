var aircraft;
var aircraftImg;
var enemy1;
var backgroundImg;


function preload(){
  aircraftImg = loadImage("Aircraft Img1.png");
  //aircraftImg = loadAnimation("A1.PNG","A2.PNG","A3.PNG","A4.PNG","A5.PNG","A6.PNG")
  backgroundImg = loadImage("background Img4.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(windowWidth/2,windowHeight/2);
  background.addImage(backgroundImg);
  background.scale = 2.5;

  
  aircraft = createSprite(125,350);
  aircraft.addAnimation("aircraftimg",aircraftImg);
  aircraft.scale = 0.3;
}

function draw() {
  //background(backgroundImg);
  /*background.velocityX = -3;
  console.log(background.width);
  if(background.x<300){
    background.x = background.width/2;
  }*/
  enemy();
  
  drawSprites();
  
}

function enemy(){
  if(frameCount %30 === 0){
    
  
  var enemy1 = createSprite(Math.round(random(0,width)),Math.round(random(0,height)),50,50);
  enemy1.velocityX = -3;
  
}}