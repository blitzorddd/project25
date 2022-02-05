
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImg, paperImg;
function preload(){
	dustbinImg = loadImage("dustbingreen.png")
	paperImg = loadImage("paper.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
image(dustbinImg, 1185,570,200,200)
image(paperImg, ball.position.x,ball.position.y,radius)
  groundObject.display();
  dustbinObj.display();

}

