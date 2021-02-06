class pig{

    constructor(x,y){

        //properties
        var to={
            restitution:0.5
        }
        this.name=B.rectangle(x,y,50,50,to)
        W.add(wo,this.name)
    }

    display(){
        var tur=this.name.angle
        push() 
        translate(this.name.position.x,this.name.position.y)
        rotate(tur*180/PI)
        rectMode(CENTER)
        fill("green")
        rect(0,0,50,50)
        pop()


    }


}