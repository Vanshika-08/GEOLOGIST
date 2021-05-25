
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone1, stone2, stone3, stone4, stone5, stone6;
var rubberBand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     hammer = new Hammer(700, 450, 170, 150);
	 ground = new Ground(800, 700, 1800, 50);
     stone1 = new Stone(600, 540);
	 stone2 = new Stone(610, 540);
	 stone3 = new Stone(620, 540);
	 stone4 = new Stone(630, 540);
	 stone5 = new Stone(640, 540);
	 stone6 = new Stone(650, 540);
	 rubberBand = new Rubber(350, 540);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  hammer.display();

  ground.display();

  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();

  rubberBand.display();
  drawSprites();
 
}



