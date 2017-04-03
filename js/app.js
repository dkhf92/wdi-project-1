let $lis;
let level = 3;
let playing = false;
let gameSequence;
let userSequence;

$(init);

function init(){
  $lis = $('li');
  $('#start').on('click', start);
  $('li').on('click', guess);
}

function start() {
  gameSequence = [];
  userSequence = [];

  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }

  console.log(gameSequence);
  playSequence();
}

function playSequence() {
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i];
      const $nextLi   = $($lis[nextIndex]);
      const prevColor = $nextLi.css('background-color');
      $nextLi.css('background-color', 'white');

      setTimeout(() => {
        $nextLi.css('background-color', prevColor);
        if (i === level) {
          playing = true;
          console.log('You can play now!');
        }
      }, 500);
    }, 1000*i);
  }
}

function guess() {
  if (!playing) {
    console.log('You cant play yet');
    return;
  }
  // Get the element I clicked on
  const $chosenLi = $(this);
  // Get the index of that li
  const chosenIndex = $lis.index($chosenLi);
  const prevColor = $chosenLi.css('background-color');
  $chosenLi.css('background-color', 'white');
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 500);

  // Add it to the sequence
  userSequence.push(chosenIndex);
  console.log(userSequence);

  if (userSequence.length-1 === level) {
    if (gameSequence.toString() === userSequence.toString()) {
      alert('WIN');
      playing = false;
    } else {
      alert('LOSE');
      playing = false;
    }
  }
}
