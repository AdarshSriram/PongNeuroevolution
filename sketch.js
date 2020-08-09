// port of Daniel Shiffman's Pong coding challenge
// by madacoo

import Paddle from './paddle.js';
import Puck from './puck.js';

const TOTAL = 15;
var leftPaddles = [];
var rightPaddles = [];
var savedLeftPaddles = [];
var savedRightPaddles = [];
var counter = 0;


let leftscore = 0;
let rightscore = 0;


function setup() {
  createCanvas(600, 400);
  console.log("in setup");
  slider = createSlider(1, 10, 1);

  for (let i = 0; i < TOTAL; i++) {
    leftPaddles[i] = new Paddle(true);
  }
  for (let i = 0; i < TOTAL; i++) {
    rightPaddles[i] = new Paddle(false);
  }
  puck = new Puck();

}

function draw() {

  for (let n = 0; n < slider.value(); n++) {


    savedLeftPaddles = puck.checkPaddleRight(rightPaddles);


    savedRightPaddles = puck.checkPaddleLeft(leftPaddles);

    for (let i = 0; i < TOTAL; i++) {
      left = left.Paddles[i];
      right = rightPaddles[i];

      left.think(puck);
      right.think(puck);

      background(0);


      left.update();
      right.update();
    }

    puck.update();

    var winner = puck.edges();

    if (winner === "left_scores") {
      newGeneration_right();
    }
    else if (winner === "right_scores") {
      newGeneration_left();
    }
  }
  for (let i = 0; i < TOTAL; i++) {
    left = left.Paddles[i];
    right = rightPaddles[i];

    left.show();
    right.show();
  }
  puck.show();

  fill(255);
  console.log("in draw");
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);


}

function keyReleased() {
  for (let i = 0; i < TOTAL; i++) {
    leftPaddles[i].move(0);
    rightPaddles[i].move(0);
  }
}

/*
function keyPressed() {
  console.log(key);
  if (key == 'w' || key == 'W') {
    left.move(-10);
  } else if (key == 's' || key == 'S') {
    left.move(10);
  }

  if (key == 'ArrowUp') {
    right.move(-10);
  } else if (key == 'ArrowDown') {
    right.move(10);
  }
}
*/