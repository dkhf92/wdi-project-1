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
let userSequence;
let $reset;

// Creates an array containing the 2 sound effects.
const audio = [
  new Audio('../sounds/button-11.wav'),
  new Audio('../sounds/button-10.wav')
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
  gameSequence = [];
  userSequence = [];

  // Initiate this "for" loop when level is equal to or higher then 0.
  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }

  console.log(gameSequence); // Logs the gameSequence array in the console log.
  playSequence(); // Runs playSequence function (?).
}

// This function
function playSequence() {
  for (let i = 0; i <= level; i++) {
    // Creates a variable to randomize the sound order. (Still possible to get 4 "failure" sounds which fucks it up)
    const randomIndex = Math.floor(Math.random() * 2);

    setTimeout(() => {
      const nextIndex = gameSequence[i]; // Variable for gameSequence index (?).
      const $nextLi   = $($lis[nextIndex]); // Variable for next li in the game sequence (?).
      const prevColor = $nextLi.css('background-color'); // Variable for the background-color of the next chosen li in the gameSequence.
      $nextLi.css('background-color', 'white'); // Sets background-color of nextli to white.
      audio[randomIndex].play(); // Plays the audio array in a random order.
      setTimeout(() => {
        $nextLi.css('background-color', prevColor);
        if (i === level) {
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
  // Shows the background-color of clicked li.
  const prevColor = $chosenLi.css('background-color');
  // Set chosen/clicked li background-color to white.
  $chosenLi.css('background-color', 'white');
  // A timeout function that resets the background-color of clicked li after 0.5 seconds. (Blink effect).
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 500);

  // Add it to the sequence
  userSequence.push(chosenIndex);

  if (userSequence[userSequence.length-1] === gameSequence[userSequence.length-1]) {
    if (userSequence.length-1 === level) {
      correct();

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

// If user imitates computerSequence correctly grid flashes green.
function correct() {
  setTimeout(() => {
    $lis.css('background-color', 'green');
    setTimeout(() => {
      $lis.css('background-color', 'yellow');
    }, 500);
  }, 500);
}

// If user clicks on wrong li grid flashes red and resets the game.
function wrong() {
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




// When we generate an array of sounds (for exmaple 4 sounds which is 4 elements in the array). After that we generate a random variable which will represent a fake sound. The variable has to be taken out of the array but ONLY after we showed the sequence to the player.

// fakeSoundIndex is a random number between 0 to last element
// arrayOfSounds.splice(fakeSoundIndex)

// When we go through an array of the sequence each time play a regular sound but if i === fakeSoundIndex instead of a regular sound we play fake sound. After that we can remove element from the array
// arrayOfSounds.splice(fakeSoundIndex)

// Figure out a way so the sounds always have 1 valid sound each sequence.
// The user have to fail the game if he clicks an li which had the unvalid sound.
