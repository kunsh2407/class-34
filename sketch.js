const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball,roof,chain,boxes=[]



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,680,1200,15)
roof=new Ground(100,100,200,20)
ball=new Ball(200,500,50)
chain=new Chain(ball.body,roof.body,{x:80,y:0})
for(var i=0;i<7;i++){
    var box =new Box(900,100,70,70)
    boxes.push(box)
    box=new Box(800,100,70,70)
    boxes.push(box)
    box=new Box(700,100,70,70)
    boxes.push(box)
    box=new Box(600,100,70,70)
    boxes.push(box)
     box=new Box(500,100,70,70)
    boxes.push(box)
}
}

function draw(){
   background(126)
    Engine.update(engine);
    chain.display();
   ground.display(); 
   roof.display();
   ball.display();
   for(var i=0;i<boxes.length;i++){
boxes[i].display();

   }

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
   
}




function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-300})
    }
}


