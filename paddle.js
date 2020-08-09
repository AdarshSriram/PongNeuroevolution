import NeuralNetwork from './nn.js';


export default class Paddle {
  constructor(isLeft, brain) {
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.ychange = 0;

    this.score = 0;
    this.fitness = 0;
    if (brain) {
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(5, 8, 2);

      if (isLeft) {
        this.x = this.w;
      } else {
        this.x = width - this.w;
      }
    }
  }


  update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  move(steps) {
    this.ychange = steps;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  mutate() {
    this.brain.mutate(0.1);
  }

  think(puck) {


    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = puck.x / height;
    inputs[2] = puck.y / height;
    inputs[3] = puck.xspeed / 20;
    inputs[4] = puck.yspeed / 20;;
    let output = this.brain.predict(inputs);
    //if (output[0] > output[1] && this.velocity >= 0) {
    if (output[0] > output[1]) {
      this.move(10);
    }
    else {
      this.move(-10);
    }
  }
}

