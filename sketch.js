const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine,world;
var ground;
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,B14,B15,B16,B17,B18,B19,B20;

function setup(){
createCanvas(3000,800);
engine = Engine.create();
world = engine.world;
ground = new Ground(600,600,1200,20);

B1 = new Box(900,100,70,70);
B2 = new Box(900,100,70,70);
B3 = new Box(900,100,70,70);
B4 = new Box(900,100,70,70);
B5 = new Box(900,100,70,70);
B6 = new Box(900,100,70,70);
B7 = new Box(800,100,70,70);
B8 = new Box(800,100,70,70);
B9 = new Box(800,100,70,70);
B10 = new Box(800,100,70,70);
B11 = new Box(800,100,70,70);
B12 = new Box(800,100,70,70);
B13 = new Box(700,100,70,70);
B14 = new Box(700,100,70,70);
B15 = new Box(700,100,70,70);
B16 = new Box(700,100,70,70);
B17 = new Box(700,100,70,70);
B18 = new Box(700,100,70,70);
B19 = new Box(700,100,70,70);
B20 = new Box(700,100,70,70);

ball = new Ball(200,200,80,80);

rope = new Rope(ball.body,{x:500,y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();

    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    B8.display();
    B9.display();
    B10.display();
    B11.display();
    B12.display();
    B13.display();
    B14.display();
    B15.display();
    B16.display();
    B17.display();
    B18.display();
    B19.display();
    B20.display();

    ball.display();

    rope.display();
}