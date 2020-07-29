class Form{
    constructor(){
this.input= createInput("name");
this.button= createButton("LOGIN");
this.greeting= createElement("h2");
this.title= createElement("h1");
    }

    display(){
        
        this.title.html("Tresure Pirate");
        //this.title.style.color="red";
       
        this.title.position(displayWidth/2-200,50);
        this.input.position(displayWidth/2-100,displayHeight/2-100);
        this.button.position(displayWidth/2-50,displayHeight/2-50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
           var name= this.input.value();
            
            this.greeting.html("welcome "+ name);
            this.greeting.position(displayWidth/2-300,displayHeight/2-300);

            this.button1= createButton("PLAY");
            this.button1.position(displayWidth/2+100,displayHeight/2+100)
            this.button1.mousePressed(()=>{
                this.greeting.hide();
                this.button1.hide();
                gameState=1;
                
            })

        })

        
    }
}