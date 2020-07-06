// ICM-2015

// Take a look at the HTML file where some things have been
// added for mobile viewing

function setup() {
  createCanvas(windowWidth, windowWidth);
  setShakeThreshold( 10);
  colorMode(HSB);
  background(0);
}


function deviceShaken() {
  var h = Math.floor(Math.random() * 50);
  background(56, 51, h);
}
