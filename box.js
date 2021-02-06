class Box{

    constructor(x,y){

        //properties
        var to={
            restitution:0.5
        }
        this.name=B.rectangle(x,y,70,70,to)
        W.add(wo,this.name)
    }

    display(){
        var tur=this.name.angle
        push() 
        translate(this.name.position.x,this.name.position.y)
        rotate(tur*180/PI)
        rectMode(CENTER)
        rect(0,0,70,70)
        pop()


    }


}