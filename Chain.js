class Chain {
constructor(Body1, Body2){
var options={
stiffness:500,
bodyA:Body1,
bodyB:Body2,
length:10

}
this.chain=Constraint.create(options);
World.add(world, this.chain);
}
display(){

    var point1=this.chain.bodyA.position
    var point2=this.chain.bodyB.position
    line (point1.x,point1.y,point2.x,point2.y);

}

}
