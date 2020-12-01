var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var roof;
var sling;
var bob;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	Canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options ={
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, constraint);

	//Create the Bodies Here.
 bobObject1 = createSprite(200,30,50,50)
 bobObject1 = createSprite(250,30,50,50)
 bobObject1 = createSprite(300,30,50,50)
 bobObject1 = createSprite(350,30,50,50)
 bobObject1 = createSprite(400,30,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display();
  roof.display();
  sling.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode===32) {
bobObject1.swing(bobObject2.bobObject3.bobObject4.bobObject5);
  }
  function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
  }
}



