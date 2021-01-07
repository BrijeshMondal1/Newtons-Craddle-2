class Chain {

    constructor(bodyA, x) {


        var options = {

            bodyA: bodyA,
            pointB: { x: x, y: height / 4 - 100 },
            length: 280
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {

        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.pointB;

        strokeWeight(5);
        push()
        stroke("green");
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        pop();
    }
}