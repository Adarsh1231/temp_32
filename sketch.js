const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg1, bg2, bg3, bg4

function preload(){
  bg1 = loadImage("morning-pic.jpg");
  bg2 = loadImage("afternoon-image.png");
  bg3 = loadImage("evening-pic.jpg");
  bg4 = loadImage("night-pic.jpg");
  getBackgroundImg()
}

function setup() {
  createCanvas(1278,608);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(255,255,255);  
  drawSprites();

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  //var response = await fetch("https://worldclockapi.com/api/json/est/now");
  //var response = await fetch("https:// worldtimeapi.org/api/timezone/America/Argentina/Salta");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour>=06 && hour<=12){
      bg = "morning-pic.jpg";
  }

  if (hour>=12 && hour<=16){
    bg = "afternoon-image.png";
  }

  if (hour>=16 && hour<=19){
    bg = "evening-pic.jpg";
  }

  if (hour>=19 && hour<=06){
    bg = "night-pic.jpg";
  }

  //backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  console.log(responseJSON);
}
