var object;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	  
	

	ground = new Ground(600,height,1200,20)

	box1=new Box(700,355,20,70);
	box2=new Box(920,355,20,70);
	box3= new Box(810,380,200,20)
	ball1=new Paper(350,200)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  
  drawSprites();
 
}

function keyPressed() {
if (keyCode===UP_ARROW) {

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})

}


}



