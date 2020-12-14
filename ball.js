class Ball{
    constructor(x,y,width,height,angle){
        var ball_options = {
            //restitution:0.8,
            frictionAir  : 0.005,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,ball_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        //strokWeight(4);
        fill("blue");
        ellipse(0,0,this.width,this.height);
        pop()
}
};