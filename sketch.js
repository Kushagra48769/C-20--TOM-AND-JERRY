var bgImg;
var cat;
var mouse;
var catImg1,catImg2,catImg4;
var mouseImg1,mouseImg2,mouseImg4;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    catImg4 =loadImage("images/cat4.png");
    mouseImg4 = loadImage("images/mouse4.png"); 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,650);
    cat.addImage(catImg1);
    cat.scale = 0.2;

    mouse = createSprite(150,640);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.2;



}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    console.log(cat.x - mouse.x)
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addImage(catImg4);
        mouse.addImage(mouseImg4);

    }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here


  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.addAnimation("catGoing",catImg2);
      cat.changeAnimation("catGoing");
      cat.velocityX = -2;
  }


}
