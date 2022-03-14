class Launcher{
    constructor(bodyA, pointB){
         var options = {
             bodyA: bodyA,
             pointB: pointB,
             stiffness: 0.04,
             lenght: 150
         }
         this.pointB = pointB
         this.bodyA = bodyA 
         this.launcher = Constraint.create(options);
         World.add(world,this.launcher);
    }
display(){
if (this.launcher.bodyA){
var pointA = this.bodyA.position
var pointB = this.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y)
}








}
}