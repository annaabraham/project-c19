
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
   // Create an ellipse that will move around with you mouse about the X axis.
 // Use the map() function to do so. 
  // change the value of Red based on the mouse movement about the X axis
  background("white");
  background(r,g,b);
  r=map(mouseX,0,1200,0,220);
  fill(255);
  ellipse(mouseX,100,50,50);
   // change the value of Green based on the mouse movement about the X axis
  g=map(mouseX,0,1200,0,255);
  fill(255);
  ellipse(mouseX,100,50,50);
    // change the value of Blue based on the mouse movement about the X axis
  b=map(mouseX,0,1200,0,100);
  fill(255);
  ellipse(mouseX,100,50,50);


}