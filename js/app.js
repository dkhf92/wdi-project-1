$(document).ready(function() {

  let difficulty = 3;
  const gameSequence = [];
  const userSequence = [];

  function selectGameSequence() {
    for (var i = 0; i < difficulty; i++) {
      const li = Math.floor((Math.random() * $('ul li').length) + 1 );
      gameSequence.push(li);
    }
    console.log(gameSequence);
    loopThroughSequence();
  }

  function loopThroughSequence() {
    for (var i = 0; i < gameSequence.length; i++) {
      //const lis = //clicks
      // $.each.userSequence() {
      userSequence.push(lis);
      //compare
      }
    }
  });
  // $('.box').on('click', function() {
  //
  //   // console.log('Clicked');
  // });
    // if (gameSequence[] === userSequence[]);
    //  console.log(gameSequence[0], userSequence[1]);
// if else // switch statement to compare arrays?

  selectGameSequence();
});




  //   const colors = ['#ff0000', '#ffff00', '#0000ff', '#00ff00'];
  //   setInterval(function() {
  //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //     $('li').css('background-color', randomColor);
  //   }, 500);
  // });

  // const sequences = ['first,second,third,fourth'];

  // setInterval(function(){
  //   var obj = $('li');
  //   const randomSequence = sequences[Math.floor(Math.random() * sequences.length)];
  //   $(obj[0]).css('background-color', randomSequence);
  // }, 800);

  // Create an array of the indexes of the lis e.g. [1,1,2,1]



  // blink('#grid', 4, 500); //blink a div with the ID of myDiv
  // blink('li', -1, 100); //blink the first element in an ordered list (infinite times)
  // blink('.box', 25, 5000); //blink anything that has a myClass on it
  //
  // function blink(elem, times, speed) {
  //   if (times > 0 || times < 0) {
  //     if ($(elem).hasClass('blink'))
  //       $(elem).removeClass('blink');
  //     else
  //     $(elem).addClass('blink');
  //   }
  //
  //   clearTimeout(function() {
  //     blink(elem, times, speed);
  //   });
  //
  //   if (times > 0 || times < 0) {
  //     setTimeout(function() {
  //       blink(elem, times, speed);
  //     }, speed);
  //     times-= .5;
  //   }
  // }





  //
  // $('.box').on('click', function() {
  //   const $blink = $(this);
  //   $blink.fadeOut('slow', function(){
  //     setTimeout(function(){
  //       $blink.fadeIn('slow');
  //     }, 100);
  //
  //   });
  // });



  // switch statement
  // generatemove (push possibilities, randomize by how many colors).





  // var comp = document.getElementById('grid');
  // grid.addEventListener('click', () => {
  //   console.log('clicked');
  // });
  // var first = document.getElementById('first');
  // first.addEventListener('click', () => {
  //   console.log('first');
  // });
  // var second = document.getElementById('second');
  // second.addEventListener('click', () => {
  //   console.log('second');
  // });
  //
  // var third = document.getElementById('third');
  // third.addEventListener('click', () => {
  //   console.log('third');
  // });
  //
  // var fourth = document.getElementById('fourth');
  // fourth.addEventListener('click', () => {
  //   console.log('fourth');
  // });
  //
  // var array = [];
  // array.push.apply('first', 'second', 'third', 'fourth');
  // console.log('aaaa');
  //

  // const $buttons = $('button.start');
  // const $reset   = $('button.reset');
  //
  // $buttons.on('click', start);
  // $reset.on('click', reset);

  // ->2
  // ->>>>>>>>>>>
  // $('.grid').on("click", function() {
  //   const $lis = $(this).grid().box();
  //   for (var i = 0, box; box = $lis[i++]) {
  //     $(box).fadeOut(300 * i+1);
  //   }
  // });
  // const lis = document.getElementByTagName('.box');
  //
  // for (var i = 0; i < lis.length; i++) {
  //   lis[i].addEventListener('click', function(){});
  // }
  // var divs = getElementByClassName ('grid');
  // var ids = ['first', 'second', 'third', 'fourth'];
  // const comprandom = ids[Math.floor(Math.random() * ids.length)];
  // while(divs.length > 0) {
  //   divs[0].id = 'grid-' + ids[i];
  //   ids.splice(i, 1);
  //   divs = [].slice.call(divs, 1);
  //   console.log('something');
  // }
  //
  //
  // $('.box').on('click', function() {
  //   var blink = function(){
  //     $('.grid').toggle();
  //   };
  //   $(document).ready(function() {
  //     setInterval(blink, 10000);
  //   });
  // });
  // });
  //
  // $('.box').on('click', function() {
  //
  //   // console.log('Clicked');
  // });
  //
  //
  //
  //
  // $('.box').on('click', function () {
  //   var $BlinkLi = $(this);
  //   setInterval(BlinkLi, 200);
  //   console.log('aaaa');
  // });
  //
  // $('.box').on('click', function() {
  //   var $blink = $(this);
  //   setInterval(blink, 200);
  //   function blink() {
  //     $('ul.grid').toggleClass('blink_orange');
  //   }
  // });
  //
  // function blinkLi(){
  //   $('ul .grid').toggleClass('blink_orange blink_red');
  // }
  //
  // function computerSequence() {
  //
  //
  //  var compBlink = $('.grid');
  // for(var i = 0; i < compBlink.length; i++){
  //     var target = Math.floor(Math.random() * compBlink.length ) + ;
  //     var target2 = Math.floor(Math.random() * compBlink.length -1) +1;
  //     compBlink.eq(target).before(compBlink.eq(target2));
  // }
  //
  //
  //
  //
  // }
  //
  //
  // function computerSequence() {
  //   var str = "Hello World!";
  //   var result = str.blink();
  //   document.getElementById('.grid').innerHTML = result;
  // }
  //
  // $('.box').on('click', function() {
  //   const $blink = $(this);
  //   $blink.setTimeout('blink', function() {
  //     $blink.setInterval('blink', 1000);
  //   }, 500);
  // });
  //
  // $start.on('click', button.start);
  // $reset.on('click', button.reset);
  //
  // $('.box').on('click', function() {
  //   // var blink = document.getElementById('first');
  //   setTimeout(function() {
  //     box.style.display = (box.style.display === 'none' ? '' : 'none');
  //   }, 500);
  // });
  //
  // $('.box').on('click', function() {
  //     $(.first)fadeout('slow', function(){
  //       $(.first).fadeIn('slow', function(){
  //         box(.first);
  //       }
  //     }
  // console.log('Clicked');
  // });
  //
  // $('.box').on('click', function() {
  //     $(this)fadeout('slow', function(){
  //       $(this).fadeIn('slow', function(){
  //         box(this);
  //       }
  //     }
  //   console.log('Clicked');
  // });
  // });
  //
  // box('.blink');
  //
  // var lis = document.getElementById('ul').getElementsByTagName('li');
  // var lis = document.getElementTagName('.grid').getElementsByTagName('.box');
  // console.log('aaaa');
  // console.log('get first: ' , ul[0].textContent);
  //
  // var computerSequence = [];
  // computerSequence.push.apply('#first', '#second', '#third', '#fourth');
  // computerSequence.push['grid'];
  // return computerSequence[1];
  //
  //
  // computerSequence.push($(this).attr('box'));
  // console.log('box'[0].textContent);
  // computerSequence.chooseRandom('box');
  // return computerSequence();
  //
  // const $computerSequence = ['#first', '#second', '#third', '#fourth'];
  // let $userSequence = [];
  // const $start = $('button.start');
  // const $reset = $('button.reset');
  //
  // const box = document.getElementById('box');










// SUEDO CODE
  //1. How to make boxes blink on click? They blink but change position when blinked //(fadeout/fadein wrong)?
  //2. Check that block animations function correctly.

  // level 1
  //3.0 Select li`s and put them into an array.
  //3.1 Create a loop (?) that runs the array and blinks the li`s
  //3.2 If this works, figure out how to only chose one li and make it blink

  //4.0 The computer "clicks" have to go into an array that can be compared with user`s //clicks
  //4. How to make ComputerSequence choose li`s random?
  //5.

  //6. Prompt user turn.

  //7.0 the li`s should now blink when user clicks on them.
  //7.1 the computerSequence array now has to be "saved" and ready to be compared to user`s clicks / array.
  //7.2 Figure out a way to put the user`s clicks into an array
  //8. Somehow the game has to end if the user clicks wrong li.
  //9. How to compare arrays?
  //10. How to clear user array after each turn, but not ComputerSequence.

  //11. If equal, next turn.
  //12. How to end game if user click on wrong Li?
  //13. How to add prompt (you fail) if user fails?

  // level 2
  //14.How to start computerSequence again and add 1 li blink?


  // Buttons
  //15. How to make startButton start the game/computerSequence?
  //16. How to make resetButton reset the game?



  //17. Where when how to use loop (s) (?)



  // —> extra stuff
  // Scoreboard
  // How to add a scoreboard?
  // How to add 1 point on scoreboard each time user completes a level?
  // How to make Scoreboard reset when resetButton is clicked?

  // Sounds on click
  // computer has 2 sounds.  (or 3 starting the game will "prompt" "simon says")
  // sound 1 = "simon says"
  // sound 2 = "dont click"
  // sound will play each time a box blinks

  // refactor and namespace
