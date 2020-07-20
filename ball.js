class Ball{
	constructor(x,y,r){
		var options ={
			'isStatic':false,
			'restitution': 0.3,
			'friction':0.5,
			'density':1.2,
		}
		this.body=Bodies.circle(x,y,r,options);
		this.r=r;
		this.image = loadImage("paper.png");
		World.add(world,this.body);
	}
    display(){
		var pos = this.body.position
	    push();
		translate(pos.x,pos.y);
		rectMode(RADIUS);
		fill("pink");
		rect(0, 0, this.width,this.height);
		pop();
		imageMode(CENTER)
		image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
		this.width = 20;
		this.height = 20;
	}
}