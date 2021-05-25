class Rubber{
    constructor(x, y, radius){
        var options = {
            restitution: 0.3,
            friction: 5,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        circleMode(RADIUS);
        stroke("yellow");
        strokeWeight(5);
        fill("orange");
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }

};