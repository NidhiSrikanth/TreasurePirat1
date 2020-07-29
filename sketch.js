var backdrop;
var gameState= 0;
var form;
var object1,groundImage;
var player,playerRunning;


function preload(){
  backdrop= loadImage("pictures/cave.PNG");
  groundImage= loadImage("pictures/ground1.PNG");
  
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  form= new Form ();
  object1= new Ground(400,700,100,10);
  playerRunning= new Player(500,700,10,20);
  
}

function draw() {
  background("white");  
  if (gameState===0){
    
    form.display();
    
  }

  if (gameState===1){
    imageMode(CENTER);
image(backdrop,displayWidth/2-30,displayHeight/2 -50,displayWidth-50,displayHeight-100);
object1.display();
playerRunning.display();
drawSprites();

  }


  

}