function setup() {
  leinwand = createCanvas(windowWidth, windowHeight) ;
  leinwand.position(0,0);
  leinwand.style("z-index","-1");
  fill(50,100,0,1000)
  noStrokert(); 
  //background(255, 115, 0, 0.979);
}

function draw() {
  circle(mouseX,mouseY,20)
}