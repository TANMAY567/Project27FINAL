class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true 
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.height,this.width);
    }
}