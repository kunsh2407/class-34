class Ball{
    constructor(x,y,radius){
        var options ={
            restitution:1,
            density:1,
            frictionAir:0.005,
            isStatic:false
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    this.radius=radius;
    

    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        //stroke("green");
        strokeWeight(5);
        ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}    