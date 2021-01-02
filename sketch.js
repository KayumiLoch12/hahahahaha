const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var Ground;
var particales = [];
var pins = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(400,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    Ground = new ground(200,796,400,10)
    for (var i = 0; i < 400; i = i+ 40){
      pins.push(new Pin(i, 50, 10))
    }
    for (var s = 0; s < 400; s = s+ 40){
      pins.push(new Pin(s, 100, 10))
    }
    for (var h = 0; h < 400; h = h + 50){
      pins.push(new Pin(h, 150, 10))
    }
    for (var d = 0; d < 400; d = d + 80){
      pins.push(new Pin(d, 200, 10))
    }
    for (var f = 0; f < 400; f = f + 100){
      pins.push(new Pin(f, 250, 10))
    }
    for (var g = 0; g < width ; g = g + 80){
      divisions.push(new Divisions(g, height-divisionHeight/2,10,divisionHeight));
    }
    
}

function draw() {
  background(0); 
  Engine.update(engine);

 

 Ground.display();
 for (var a = 0; a < pins.length; a = a+ 1){
pins[a].display()
}  
for (var w = 0; w < divisions.length; w = w+ 1){
  divisions[w].display()
  }  
display();
    
  drawSprites();
}
  