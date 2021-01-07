
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, abll4, ball5;
var roof;
var chain;

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Box(width / 2, height/4 - 100, width/4 + 40, 20);

	ball1 = new Ball(width / 2, height - 500, 30);
	ball2 = new Ball(width / 2 - 60, height - 500, 30);
	ball3 = new Ball(width / 2 - 120, height - 500, 30);
	ball4 = new Ball(width / 2 + 60, height - 500, 30);
	ball5 = new Ball(width / 2 + 120, height - 500, 30);

	chain1 = new Chain(ball1.body, width / 2);
	chain2 = new Chain(ball2.body, width / 2 - 60);
	chain3 = new Chain(ball3.body, width / 2 - 120);
	chain4 = new Chain(ball4.body, width / 2 + 60);
	chain5 = new Chain(ball5.body, width / 2 + 120);

    backgroundColor = color(random(0, 255), random(0, 255), random(0, 255));

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(backgroundColor);

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
	roof.display("grey");
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	drawSprites();
	
	textSize(35);
	textFont("comic sans ms");
	fill("black");
	text("NEWTONS CRADDLE!", 50, 50);
	textSize(15);
	text("DRAG THE MOUSE TO MOVE THE BOB", 50, height- 150)
 
}

function mouseDragged() {

		Matter.Body.setPosition(ball3.body, { x: mouseX, y: mouseY });

}
