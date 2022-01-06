const finalPosition = function (moves) {
  //starting off at 0, 0
  let x = 0;
  let y = 0;
  //for loop to loop through array of moves
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'south') {
      y--;
    } else if (moves[i] === 'east') {
      x++;
    } else if (moves[i] === 'west') {
      x--;
    }
  }
  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

finalPosition(moves);