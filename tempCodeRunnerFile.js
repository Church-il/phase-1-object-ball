function largestShoeSizeRebounds(playerName) {
  const game = gameObject();
  let largestShoeSize = 0;
  let largestShoeSizeRebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > largestShoeSize && player === playerName) {
        largestShoeSize = game[team].players[player].shoe;
        largestShoeSizeRebounds = game[team].players[player].rebounds;
      }
    }
  }

  return largestShoeSizeRebounds;
}
console.log(largestShoeSizeRebounds());