function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  const emoji = ['⚀','⚁','⚂','⚃','⚄','⚅'];
  document.getElementById('diceResult').innerText = emoji[dice - 1];
}

function flipCoin() {
  const result = Math.random() < 0.5 ? '🪙 Heads' : '🪙 Tails';
  document.getElementById('coinResult').innerText = result;
}
