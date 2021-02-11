const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var ball_options ={
        restitution: 0.7
    }
ground=new Ground(200,380,400,20)
    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);

box=new Box (100,100,50,50)
box1=new Box (111,120,50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box.display()
    box1.display()
}