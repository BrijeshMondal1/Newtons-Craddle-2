class Box {

    constructor(x, y, width, height) {

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(color) {

        var pos = this.body.position;
        
        push();
        fill(color);
        strokeWeight(1.5);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}