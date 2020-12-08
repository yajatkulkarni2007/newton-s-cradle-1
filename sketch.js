
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

bob1=new Bob(150,200);
bob2=new Bob(200,200);
bob3=new Bob(250,200);
bob4=new Bob(300,200);
bob5=new Bob(350,200);

ground=new Ground(700,700,800,40);

rope1=new Rope(ground.body,{x:350,y:350});
rope2=new Rope(bob1.body,{x:350,y:350});
rope3=new Rope(bob2.body,{x:350,y:350});
rope4=new Rope(bob3.body,{x:350,y:350});
rope5=new Rope(bob4.body,{x:350,y:350});
rope6=new Rope(bob5.body,{x:350,y:350});

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function display(){
	ground.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();	
	rope6.display();
}


