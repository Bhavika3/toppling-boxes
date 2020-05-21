const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,200,30,80);
    box2 =new Box(200,100,80,30)
    ground=new Ground(200,380,400,20)
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display ();
}