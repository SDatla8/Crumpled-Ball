var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,20)
	ground1 = new Ground(600,650,20,100)
	ground2 = new Ground(800,650,20,100)
ball = new Ball(300,400,10);
	
}


function draw() {
	background("black");
	Engine.update(engine);
  
  ground.display();
ball.display();	
ground1.display();  
ground2.display();  
  
 
 
}
function keyPressed() {
	if (keyCode=== UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});
	}
	
	
	  }


