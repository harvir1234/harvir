const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Stone;
var rubber;
var iron;
var Bottle;

function setup(){
    var canvas = createCanvas(1200,630);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(635,height,1200,20);
    hammer = new Hammer(10,100);
    Stone = new stone(400,620,70,100);
    rubber = new Rubber(580,580,50,50);
    iron = new Iron(780,620,200,100);
   Bottle = new bottle(980,620,50,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Stone.display();
    rubber.display();
    iron.display();
    Bottle.display();
}