var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var one,two,three,four;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = 2;

    one = createSprite(400,2,800,5);
	one.visible = false;
	two = createSprite(2,400,5,800);
	two.visible = false;
	three = createSprite(400,750,800,5);
	three.visible = false;
	four = createSprite(800,400,5,800);
	four.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

    fairy.collide(star);
    fairy.collide(one);
	fairy.collide(two);
	fairy.collide(three);
	fairy.collide(four);
	
	keyPressed();
    drawSprites();

}

function keyPressed() {
	if(keyDown("UP_ARROW")){
		fairy.velocityY = -5;
	}
	if(keyDown("DOWN_ARROW")){
		fairy.velocityY = 5;
	}
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX = 5;
	}
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -5;
	}
}
