class Paper{
constructor(x,y){
    var object_options={
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	  }
	
	  this.body=Bodies.circle(x,y,25, object_options)
	  World.add(world,this.body)
}
display(){
var pos = this.body.position
    ellipseMode(CENTER)
    ellipse(pos.x, pos.y ,50,50)
}

}