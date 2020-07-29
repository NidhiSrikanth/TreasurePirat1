class Player {
    constructor(x,y,width,height){
        this.player= createSprite(x,y,width,height);
        
        this.playerImage= loadAnimation ("pictures/running1.png","pictures/running2.png","pictures/running3.png","pictures/running4.png","pictures/running5.png");
    }
display(){
    this.player.addAnimation("playerRunning",this.playerImage);
 
    
}

    
}