let $main;
let $score;
let $start;
let $grid;
let $lis;
let gridSize;
let level;
let playing;
let score;
let gameSequence;
let gameSequenceWithoutIncorrects;
let userSequence;
let $reset;
let numberOfIncorrects;

// Creates an array containing the 2 sound effects.
const audio = [
  'incorrect',
  'correct'
];

$(init);

function init(){
  $main  = $('main');
  $start = $('#start');
  $score = $('.score');
  $reset = $('#reset');
  reset();

  // Click the start button to start the game.
  $start.on('click', start);

  // When you click the li`s in guess function the li`s respond(?).
  $main.on('click', 'li', guess);

  // When you click the reset button it resets..
  $reset.on('click', reset);
}

function createGrid() {
  // Creates lis in the $grid variable.
  $grid = $('<ul>', { class: 'grid' });
  // Append the $grid variable to to the $main variable which runs every time loading the page or resetting the game. This makes the lis visible on the page.
  $main.html($grid);

  // Variable that returns value of gridsize when called(?)
  const numberOfLis = Math.pow(gridSize, 2);
  // Variable that "appends" witdh to the $grid when called(?)
  const gridWidth   = $grid.width();

  // A for loop that styles height and width of lis. Appending lis to grid.
  for (let i = 0; i < numberOfLis; i++) {
    const li = $('<li>').css('height', gridWidth/gridSize).css('width', gridWidth/gridSize);
    $grid.append(li);
  }

  $lis = $('li');
}

// Run start function after clicking start button.
function start() {
  gameSequence       = [];
  userSequence       = [];
  numberOfIncorrects = 0;

  // Initiate this "for" loop when level is equal to or higher then 0.
  for (let i = 0; i <= level; i++) {
    let nextItem = {
      index: Math.floor(Math.random() * $lis.length),
      audio: audio[Math.floor(Math.random() * audio.length)]
    };

    if (nextItem.audio === 'incorrect') {
      numberOfIncorrects++;
    }

    while (numberOfIncorrects > 1) {
      nextItem = {
        index: Math.floor(Math.random() * $lis.length),
        audio: audio[Math.floor(Math.random() * audio.length)]
      };

      if (nextItem.audio === 'correct') {
        numberOfIncorrects--;
      }
    }

    gameSequence.push(nextItem);
  }

  gameSequenceWithoutIncorrects = gameSequence.filter(n => n.audio !== 'incorrect');

  // Logs the gameSequence array in the console log.
  console.log('gameSequence', gameSequence);
  console.log('gameSequenceWithoutIncorrects', gameSequenceWithoutIncorrects);

  // Runs playSequence function (?).
  playSequence();
}

// This function
function playSequence() {
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i].index; // Variable for gameSequence index (?).
      const $nextLi   = $($lis[nextIndex]); // Variable for next li in the game sequence (?).
      const prevColor = $nextLi.css('background-color'); // Variable for the background-color of the next chosen li in the gameSequence.
      $nextLi.css('background-color', 'white'); // Sets background-color of nextli to the color in the object.

      const tempAudio = new Audio(`../sounds/${gameSequence[i].audio}.wav`);
      tempAudio.play(); // Plays the audio property

      setTimeout(() => {
        $nextLi.css('background-color', prevColor);
        if (i === level) {
          // Remove all undefined elements from the sequence
          playing = true;
          console.log('You can play now!');
        }
      }, 500); // 0.5 second interval from nextLi to prevColor (?)
    }, 1000*i); // 1 second between each gameSequence (?)
  }
}

// This function will only run if playSequence has already run and variable playing is true. If playing is false you will "return" to the start (?).
function guess() {
  if (!playing) {
    console.log('You cant play yet');
    return;
  }

  // Get the element I clicked on
  const $chosenLi = $(this);
  // Get the index of that li
  const chosenIndex = $lis.index($chosenLi);

  // Add it to the sequence
  userSequence.push(chosenIndex);

  // Shows the background-color of clicked li.
  const prevColor = $chosenLi.css('background-color');
  // Set chosen/clicked li background-color to white.
  $chosenLi.css('background-color', 'white');
  // A timeout function that resets the background-color of clicked li after 0.5 seconds. (Blink effect).
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 500);

  if (
    userSequence[userSequence.length-1] ===
    gameSequenceWithoutIncorrects[userSequence.length-1].index
  ) {
    correct();

    if (userSequence.length === gameSequenceWithoutIncorrects.length) {
      allCorrect();

      score++;
      // add text to the score after level:
      $score.text(`Level: ${score}`);

      // level increases if score
      if (score % 2 === 0) {
        level++;
      }

      if (score % 6 === 0) {
        gridSize++;
        createGrid();
      }

      playing = false;
    }
  } else {
    // Runs "wrong" function which resets the game.
    wrong();
  }
}

function correct() {
  new Audio('../sounds/correct.wav').play();
}

// If user imitates computerSequence correctly grid flashes green.
function allCorrect() {
  setTimeout(() => {
    $lis.css('background-color', 'green');
    setTimeout(() => {
      $lis.css('background-color', 'yellow');
    }, 500);
  }, 500);
}

// If user clicks on wrong li grid flashes red and resets the game.
function wrong() {
  new Audio(`../sounds/incorrect.wav`).play();

  // Convert to a reset function later
  $lis.css('background-color', 'red');
  setTimeout(() => {
    $lis.css('background-color', 'yellow');
    reset();
  }, 500);
}

function reset(){
  gridSize     = 2;
  // The sequence will be length 3
  level        = 3;
  playing      = false;
  score        = 1;

  $score.text(`Level: ${score}`);
  createGrid();
}
