<h4>wdi-project-1</h4>
<h3>My first project for WDI in London.</h3>

![](MemoryGame.png)



<h3>Introduction</h3>

This Memory Game can be enjoyed as one player or multiplayer. It is based on the game Simon says, in this case "Simon" is the computer. This is my first project on the Web Development Immersive course at General Assembly.

The game can be played here: https://mysterious-forest-15504.herokuapp.com/

You can watch my code here: https://github.com/dkhf92/wdi-project-1



<h3>How to play</h3>

The 4 boxes will flash in a sequence, your objective is to imitate the computers sequence. For every flash there is also a sound connected to it. There is a valid sound and an invalid sound. If a box flashes with the invalid sound, it is removed from the computer sequence and you are to leave it out when you try to imitate the computer. 

Every sixth level the game becomes more difficult by adding more boxes to the game as the sequence gets longer. The sequence becomes longer as the player(s) progresses through the levels.



<h3>Project Brief</h3>

Use our two weeks of learning with HTML, CSS and Javascript to create a game.

<h3>Code</h3>


```
      if (score % 6 === 0) {
        gridSize++;
        createGrid();
      }
      
```

A cool effect that comes into play when user reach level 6, 12 etc. The createGrid function runs and more squares are added to the grid.

<h3>How the game was built</h3>

Memory Game was created using HTML, CSS and Javascript.

https://coolors.co/ (Color generator for styling)

https://fonts.google.com/ (Where I picked out my font for the text)



<h3>Credits</h3>

GA instructors Alex Chin, Rane Gowan, Natalie Huitson and Edmund Compton.
