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
let $rules;
let shouldShowRules = true;

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
  $rules = $('.rules');

  // Calls on reset function which resets game and calls the createGrid function.
  reset();

  // Click the start button to start the game.
  $start.on('click', start);

  // When you click the li`s in guess function the li`s respond.
  $main.on('click', 'li', guess);

  // When you click the reset button it resets..
  $reset.on('click', reset);

  // Click on "Rules" to toggle the rules of game.
  $rules.on('click', rules);
}
// This function is called by reset() in function init and runs every time you refresh page or reset game.
function createGrid() {
  // Creates lis in the $grid variable.
  $grid = $('<ul>', { class: 'grid' });
  // Append the $grid variable to to the $main variable which runs every time loading the page or resetting the game. This makes the lis visible on the page.
  $main.html($grid);

  // Variable that returns value of gridsize.
  const numberOfLis = Math.pow(gridSize, 2);
  // Variable that "appends" witdh to the $grid.
  const gridWidth   = $grid.width();

  // Initiate this "for" loop when numberofLis is greater then 0.
  for (let i = 0; i < numberOfLis; i++) {
    // Variable that sets height and width of the lis.
    const li = $('<li>').css('height', gridWidth/gridSize).css('width', gridWidth/gridSize).addClass('sequence');
    // Appends the lis to the $grid.
    $grid.append(li);
  }


  // Setting $lis to be equal to all of the lis when called.
  $lis = $('.sequence');
}

// Clicking the start button calls on this function.
function start() {

  // Creates empty arrays for gameSequence and userSequence and sets numberOfIncorrects to be 0.
  gameSequence       = [];
  userSequence       = [];
  numberOfIncorrects = 0;

  // Initiate this "for" loop when level is equal to or higher then 0.
  for (let i = 0; i <= level; i++) {
    let nextItem = {
      // Set the index of gameSequence to be randomized
      index: Math.floor(Math.random() * $lis.length),
      audio: audio[Math.floor(Math.random() * audio.length)]
    };

    // If the audio that is played when a box flashes is equal to the 'incorrect' sound, increase  numberOfIncorrects by 1.
    if (nextItem.audio === 'incorrect') {
      numberOfIncorrects++;
    }

    // While numberOfIncorrects is larger then 1
    while (numberOfIncorrects > 1) {
      nextItem = {
        index: Math.floor(Math.random() * $lis.length),
        audio: audio[Math.floor(Math.random() * audio.length)]
      };

      // If the audio of nextItem equals to the 'correct' sound numberOfIncorrects is (removed/decrease by 1?)?
      if (nextItem.audio === 'correct') {
        numberOfIncorrects--;
      }
    }
    // Push the nextItem(s) into the gameSequence array.
    gameSequence.push(nextItem);
  }
  // Filters out the 'incorrect' audio from gameSequenceWithoutIncorrects so you are able to compare the users array without the 'incorrect' sound.
  gameSequenceWithoutIncorrects = gameSequence.filter(n => n.audio !== 'incorrect');

  // Logs the gameSequence array in the console log.
  console.log('gameSequence', gameSequence);
  // logs the gameSequenceWithoutIncorrects in the console log.
  console.log('gameSequenceWithoutIncorrects', gameSequenceWithoutIncorrects);

  // Calls on the playSequence function
  playSequence();
}

// This function is called when the start function is "finished".
function playSequence() {
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i].index; // Variable for gameSequence index.
      const $nextLi   = $($lis[nextIndex]); // Get the index
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
      }, 500); // 0.5 second interval from nextLi to prevColor.
    }, 1000*i); // 1 second between each gameSequence.
  }
}

// This function will only run if playSequence has already run and variable playing is true. If playing is false you will "return" to the start.
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

  // If userSequence Index
  if (
    userSequence[userSequence.length-1] ===
    gameSequenceWithoutIncorrects[userSequence.length-1].index
  ) {
    correct();
    // If userSequence
    if (userSequence.length === gameSequenceWithoutIncorrects.length) {
      allCorrect();

      score++;
      // add text to the score after level:
      $score.text(`Level: ${score}`);

      // level increases if score
      if (score % 2 === 0) {
        level++;
      }
      // When you reach level 6,12 etc the gridsize increases.
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

// This function is called when you click on "Rules" on the page.
function rules() {
  // If true display the text, then set back to false. Else display none.
  if(shouldShowRules === true) {
    $('.text').css('display', 'block');
    shouldShowRules = false;
  } else {
    $('.text').css('display', 'none');
    shouldShowRules = true;
  }
}
