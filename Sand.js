class Sand{
    constructor(x, y, width, height){
        var options = {
            restitution: 2,
            friction: 1.0,
            density: 2
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        stroke("yellow");
        strokeWeight(5);
        fill("orange");
        pop();
    }

};