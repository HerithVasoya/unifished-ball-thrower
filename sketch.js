
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200, 100, 20, ball_option);
	World.add(world, ball);

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_option);
	World.add(world, ball);
	
	groundObj = new Ground(width/2, 670, width,20);
    leftSide = new Ground(500, 600, 20, 120);
	rightSide = new Ground(600, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  groundObj.display()

  drawSprites();
 
}



