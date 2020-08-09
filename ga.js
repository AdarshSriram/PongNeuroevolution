// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Neuro-Evolution Flappy Bird

function nextGeneration_left() {
  console.log('next generation left');
  calculateFitness_left();
  for (let i = 0; i < TOTAL; i++) {
    leftPaddles[i] = pickOne_left();
  }
  savedLeftPaddles = [];
}

function nextGeneration_right() {
  console.log('next generation right');
  calculateFitness_right();
  for (let i = 0; i < TOTAL; i++) {
    rightPaddles[i] = pickOne_right();
  }
  savedRightPaddles = [];
}

function pickOne_left() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedLeftPaddles[index].fitness;
    index++;
  }
  index--;
  let paddle = savedLeftPaddles[index];
  let child = new Paddle(true, paddle.brain);
  child.mutate();
  return child;
}

function pickOne_right() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedRightPaddles[index].fitness;
    index++;
  }
  index--;
  let pad = savedRightPaddles[index];
  let child = new Paddle(false, pad.brain);
  child.mutate();
  return child;
}

function calculateFitness_left() {
  let sum = 0;
  for (let pad of savedLeftPaddles) {
    sum += pad.score;
  }
  for (let pad of saveddLeftPaddles) {
    pad.fitness = pad.score / sum;
  }
}

function calculateFitness_right() {
  let sum = 0;
  for (let pad of savedRightPaddles) {
    sum += pad.score;
  }
  for (let pad of savedRightPaddles) {
    pad.fitness = pad.score / sum;
  }
}