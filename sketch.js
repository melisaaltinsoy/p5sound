class Doorbell {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // Show the doorbell (hardcoded colors, could be improved)
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

// A sound file object
let dingdong, analyzer;

// A doorbell object (that will trigger the sound)
let doorbell;

function setup() {
  createCanvas(200, 200);

  // Load the sound file.
  // We have included both an MP3 and an OGG version.
  soundFormats('mp3', 'ogg');
  dingdong = loadSound('assets/doorbell.mp3');

  // Create a new doorbell
  doorbell = new Doorbell(width / 2, height / 2, 64);
  analyzer = new p5.Amplitude();
  analyzer.setInput(dingdong);
}

function draw() {
  background(255);
  // Show the doorbell
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

//function mousePressed() {
  // If the user clicks on the doorbell, play the sound!
//  if (doorbell.contains(mouseX, mouseY)) {
//    dingdong.play();
//  }
//}
