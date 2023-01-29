function setup() {
    createCanvas(900, 600);
  }
  
  function draw() {
  background(220);
//   ellipse(80,60,100,100);
ellipse(100,100, 90,90);
  }


  function setup() {
    createCanvas(1000, 400);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }

 