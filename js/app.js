let backgroundColor = [0, 0, 0];
let column = 0;
let row = 0;
let widthVideo = 320;
let heightVideo = 240;

//! Code that runs on the beginning
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(widthVideo, heightVideo);
  background(backgroundColor);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(widthVideo, heightVideo);
}

let marginFrame = widthVideo / 10;
let sizeFrame = 10;

function draw() {
  image(video, 0, 0, width, height);
  // tint(255, 0, 150);
  // image(video, 0, 0, width, height);
  loadPixels();
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // Rule to paint every single pixel (*4)
      // let index = (col + row * width) * 4;
      // let index = (col + row * width) * 32;
      // pixels[index] = 255;
      // pixels[index + 1] = 255;
      // pixels[index + 2] = 255;
      // pixels[index + 3] = 255;

      let index = (col + row * width) * 4;
      if (col > marginFrame & col < marginFrame + sizeFrame ||
        col > widthVideo - marginFrame - sizeFrame & col < widthVideo - marginFrame) {
        pixels[index] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
        pixels[index + 3] = 255;
      }
    }
  }
  updatePixels();
}


// // The camera access will be given only iver https sites, or on localhost
// // let backgroundColor = [0, 0, 0];
// let backgroundColor = 51;
// let video;
// let btnTomarFoto;

// // Code that runs on the beginning
// function setup() {
//   // createCanvas(windowWidth, windowHeight);
//   createCanvas(320, 240);
//   background(backgroundColor);
//   video = createCapture(VIDEO);
//   video.size(320, 240);
//   // Hidding de DOM video
//   // video.hide();
//   btnTomarFoto = createButton("Tomar foto");
//   btnTomarFoto.mousePressed(takeSnap);
// }

// function takeSnap() {
//   image(video, 0, 0);
// }

// function draw() {
//   // tint(255, 0, 150);
//   // image(video, 0, 0, width, height);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   background(backgroundColor);
// }