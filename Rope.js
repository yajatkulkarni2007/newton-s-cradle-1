class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
lenght:10
}
pointB=pointB;
this.string=Constraint.create(options);
World.add(world, this.string);
}
display(){
    var pointA=this.bodyA.position;
    var pointB=pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}