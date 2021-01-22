
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var rope1, bobObject1, roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
    bobObject1= new Bob(200,320,50,50);
	bobObject2= new Bob(250,320,50,50);
	bobObject3= new Bob(300,320,50,50);
	bobObject4= new Bob(350,320,50,50);

	//Create the Bodies Here.
	roofObject= new Roof(100,120,30,300);
	
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}


function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  roofBodyPosition=constraint.bodyB.position

  roofBodyOffset=constraint.pointB;
  
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




