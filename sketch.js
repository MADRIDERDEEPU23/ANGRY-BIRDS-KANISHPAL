//namespacing
const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies

var en,wo,box,box2,pig1

function setup() {
  createCanvas(1200,400);

 en=E.create()
  wo=en.world //accessing world from engine
  console.log(en)

  box= new Box(700,320)
 g=new grod(600,380)
 box2=new Box(920,320)
 pig1=new pig(810,350)
 log1=new logs(810,260,300,PI/2)
}

function draw() {
  background(0);  

  E.update(en)
  box.display()
 g.max()
 box2.display()
 pig1.display()
 log1.l()
}

//rect()
//ellipse()
