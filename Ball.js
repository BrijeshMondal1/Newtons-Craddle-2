class Ball {

    constructor(x,y,radius){

        var options ={

            restitution: 1.18,
            friction: 0,
            density: 1,

        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
  
    }

    display(color){
       var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        noStroke();
        fill(color);
        translate(pos.x,pos.y);
        ellipse(0,0,this.radius);
        pop();
    }
}