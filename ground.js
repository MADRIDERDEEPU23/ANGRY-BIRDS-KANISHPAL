class grod{
    constructor(x,y){
       var go={
           isStatic : true
       }
        this.g=B.rectangle(x,y,1200,20,go)
        W.add(wo,this.g)
    }
    max(){
        rectMode(CENTER)
        rect(this.g.position.x,this.g.position.y,1200,20)
    }
}