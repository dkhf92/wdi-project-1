// The variables.
let $lis; //
let level = 3; // The for loop level will run three times.
let playing = false; //
let gameSequence; //
let userSequence; //
let score = 1;


$(init);

function init(){
  $lis = $('li'); // $lis variable = the li`s on html tab(?).
  $('#start').on('click', start); // Click the start button to start the game.
  $('li').on('click', guess); // When you click the li`s in guess function the li`s respond(?).
}

function start() { // Run start function after clicking start button.
  gameSequence = []; // Resets the variables each time start button is clicked.
  userSequence = []; // ===^

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
    setTimeout(() => {
      const nextIndex = gameSequence[i]; // Variable for gameSequence index (?).
      const $nextLi   = $($lis[nextIndex]); // Variable for next li in the game sequence (?).
      const prevColor = $nextLi.css('background-color'); // Variable for the background-color of the next chosen li in the gameSequence.
      $nextLi.css('background-color', 'white'); // Sets background-color of nextli to white.

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
  console.log(userSequence);

  // Array != array. Console log will not bother to check what is inside the objects. Therefore you convert the array`s toString to be able to see if they are really equal. If the gameSequence === userSequence you win. Level++ indicates that the next round/level will add a li in the gameSequence.
  if (userSequence.length-1 === level) {
    if (gameSequence.toString() === userSequence.toString()) {
      alert('WIN');
      level++;
      score++;
      $('p').text(`Level: ${score}`);
      playing = false;
      if (level > 1) {
        levelCheck();
      }
    } else {
      alert('LOSE');
      playing = false; // If you fail, function "guess" will stop running. (?)
    }
  }
}

function levelCheck() {
  // if (level % 3 === 0) {  // this function runs if level can be divided by 3 and return 0.
  // playing = true;
  var $grid = $('#grid'); // Grab the Id grid
  $grid.css('width', '480px'); // Changing the width of grid to fit in new li`s.
  var $newli1 = $(document.createElement('li')); //Create new element that is an li and using jquery selector.
  var $newli2 = $(document.createElement('li'));
  $newli1.css('background', 'grey'); // Setting newli1 background to grey.
  $newli2.css('background', 'purple'); // Setting newli2 background to purple.
  $grid.append($newli1); // Append the new li to the ul.
  $grid.append($newli2); // ===^
  console.log($grid);
  console.log('more boxes');
  $lis = $('li'); // adding the new lis to variable $lis
}



// // add 2 more boxes/li after level3 is finished
// // - make a function that runs after userSequence is successfull ?
// // - these li`s have to be added to gameSequence possibilities of li`s.
//    - Create two new li`s in html with id fifth and sixth (?)
//    - How to keep the two new Li`s hidden until level 3 is finished?
//    - "append" the two new li`s to the ---- after level 3 (?).



// -  //6. Prompt user turn after computerSequence is finished.
// -  //12. How to end game if user click on wrong Li?
// -  //13. How to add prompt (you fail) if user fails
// -  //16. How to make resetButton reset the game
//
// -  // —>  stuff
// -
// -  // Sounds on click.
// - Figure out how to add sounds to the Li`s on click and when computerSequence runs.
// Where to find sounds I can use ? (sound library ?) //
// Create the sound variables inside the playSequence function?
// One variable for each sound to be used inside functions?
// -  // sound will play each time a box blinks
// -


// resetButton ?
// -  // refactor and namespace

// -------------------------------------
// -  // Scoreboard
// -  // How to add a scoreboard?
// -  // How to add 1 point on scoreboard each time user completes a level?
// -  // How to make Scoreboard reset when resetButton is clicked?

// create a score div/text?  in html file .
// var score =  1; (start at level 1.)

// this function will run if (gameSequence.toString() === userSequence.toString()) (?)
// put the score = +1 after this

// alert("level2/next level") (?)
