let song;

function preload() {
  // we have included both an .ogg file and an .mp3 file
  soundFormats('ogg', 'mp3');

  // if mp3 is not supported by this browser,
  // loadSound will load the ogg file
  // we have included with our sketch
  song = loadSound('assets/doorbell.mp3');
}

function setup() {
  createCanvas(710, 200);

  // song loaded during preload(), ready to play in setup()
  song.play();
  
}

function draw() {
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause();
    background(255, 0, 0);
  } else {
    song.play(); // playback will resume from the pause position
    background(0, 255, 0);
  }
}
