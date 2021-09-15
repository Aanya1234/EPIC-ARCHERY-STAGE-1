class ComputerBase {
    constructor(x, y, w, h) 
    {
      let options = {
        isStatic:true
      };
      
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
     this.image = loadImage("./assets/base2.png");
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,250,500,this.w,this.h);
      pop();
    }
  }