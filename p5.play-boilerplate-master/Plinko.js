class Plinko {
    constructor(x,y,radius) {
      var options ={
        isStatic:true,
}
      
      this.radius = 10;
      this.body = Bodies.circle(x, y,50, options);
      World.add(world, this.body);
      
    }  

    display() {
      var pos =this.body.position;
      var angle=this.body;
      push();
      translate(pos.x,pos.y);
      rotate(ANGLE);
      imageMode(CENTER);
      fill(255);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius);
      pop();
    }
  }
  