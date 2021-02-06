class logs{

constructor(x,y,h,angle){


var lg={restitution:0.3}
this.log=B.rectangle(x,y,20,h,lg)
Matter.Body.setAngle(this.log,angle)
W.add(wo,this.log)
this.h=h
}
l(){
var tr=this.log.position
var ang=this.log.angle
push()
translate(tr.x,tr.y)
rotate(ang)

rectMode(CENTER)
rect(0,0,20,this.h)
pop()


}




}