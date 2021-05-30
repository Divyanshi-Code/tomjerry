var background , bgImg;
var cat , mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catmoving1 = loadImage("cat1.png")
    mousemoving1 = loadImage("mouse1.png");
    catmoving2 = loadImage("cat2.png","cat3.png");
    mousemoving2 = loadImage("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
