//! The camera access will be given only over https sites, or on localhost
//? Main variables
let backgroundColor = [0, 0, 0];
let column = 0;
let row = 0;
let widthVideo = 320;
let heightVideo = 240;

//? Code that runs on the beginning
function setup() {
  createCanvas(widthVideo, heightVideo);
  background(backgroundColor);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(widthVideo, heightVideo);
}

//? Frame variables
let marginFrame = widthVideo / 15;
let sizeFrame = 10;

function draw() {
  image(video, 0, 0, width, height);
  // tint(255, 0, 150);
  loadPixels();
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      //? Every single pixel on the screen have 4 pixels for r + g + b + alpha
      let index = (col + row * width) * 4;
      //? Left vertical line
      if (col > marginFrame & col < marginFrame + sizeFrame & row > marginFrame & row < heightVideo - marginFrame ||
        //? Right vertical line
        col > widthVideo - marginFrame - sizeFrame & col < widthVideo - marginFrame & row > marginFrame & row < heightVideo - marginFrame ||
        //? Top horizontal line
        row > marginFrame & row < marginFrame + sizeFrame & col > marginFrame & col < widthVideo - marginFrame ||
        //? Bottom horizontal line
        row > heightVideo - marginFrame - sizeFrame & row < heightVideo - marginFrame & col > marginFrame & col < widthVideo - marginFrame
      ) {
        pixels[index] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
        pixels[index + 3] = 255;
      }
    }
  }
  updatePixels();
}



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