//game object function
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
console.log(gameObject());

//to Get the Number of Points Scored by a Player
function numPointsScored(playerName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].points;
    }
  }
}
console.log(numPointsScored("Alan Anderson"));


//to get the shoe size of the player
function shoeSize(playerName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName].shoe;
    }
  }
}
console.log(shoeSize("Alan Anderson"));


//to get the team colors of a given team
function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
console.log(teamColors("Brooklyn Nets")); 


//to get the team names
function teamNames() {
  const game = gameObject();
  return Object.values(game).map(team => team.teamName);
}
console.log(teamNames());


//to get player numbers for a team
function playerNumbers(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(player => player.number);
    }
  }
}
console.log(playerNumbers("Brooklyn Nets"));


//to get the stats of a player
function playerStats(playerName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
}
console.log(playerStats("Mason Plumlee"));


//to get the number of rebounds of the player with the largest shoe size
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > largestShoeSize) {
        largestShoeSize = game[team].players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  }

  for (let team in game) {
    if (game[team].players[playerWithLargestShoe]) {
      return game[team].players[playerWithLargestShoe].rebounds;
    }
  }
}
console.log(bigShoeRebounds());




