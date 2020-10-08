class Box{
    constructor(x, y, width, height) {
        var options ={
            isStatic: false,
            restitution:0.8,
            friction:1,
            density:1
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
   
      display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        if(this.body.speed > 4){
          World.remove(world, this.body);
          push();
          this.visiblity = this.visiblity - 5;
          tint(255,this.visiblity);
          rect(this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
        pop();
      }
      
}