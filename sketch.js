const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);

    pig1 = new Pig(800,350);

    log1 = new log(800,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);

    pig2 = new Pig(800,230);

    log2 = new log(800,180,300, PI/2);

    box5 = new Box(800,160,70,70);

    ground = new Ground(600,height,1200,20);

    log3 = new log(760,120, 150, PI/5);
    log4 = new log(840,120, 150, -PI/5);

    bird1 = new bird(100,100)
}

function draw()
{
    background(0);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();

}