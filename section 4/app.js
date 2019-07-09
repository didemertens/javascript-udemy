/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {
      // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    var lastDice = dice;
      // 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    var diceDOMTwo = document.querySelector('.dice-2');
    diceDOMTwo.style.display = 'block';
    diceDOMTwo.src = 'dice-' + diceTwo + '.png';

    // 3. update round score if rolled number NOT 1, not 2 times 6
  if (dice === 1){
    // next player
    nextPlayer();
    lastDice = 0;
  } if (diceTwo == 1){
    // next player
    nextPlayer();
    lastDice = 0;
  } else if (dice === 6 && lastDice === 6) {
    // cannot throw 6 in a row
    roundScore = 0;
    scores[activePlayer] = 0;
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.getElementById('score-' + activePlayer).textContent = '0';
    nextPlayer();
    lastDice = 0;
  } else {
    // add score
    console.log(dice, diceTwo)
    roundScore = roundScore + dice + diceTwo;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    lastDice = dice;
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  finalScore = document.getElementById("finalScore").value
  if (gamePlaying){
    // add current to global score
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if won game
    if (scores[activePlayer] >= finalScore) {
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.dice-2').style.display = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
    } else{
      nextPlayer();
    }
  }
})

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  gamePlaying = true;
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
