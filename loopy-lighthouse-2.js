function loopyLighthouse (range, multiples, words) {
  for (let count = range[0]; count <= range[1]; count++) {
    if ((count % multiples[0] === 0) && (count % multiples[1] === 0)){
      console.log(words[0]+words[1]);
    } else if (count % multiples[1] === 0){
        console.log(words[1]);
    } else if (count % multiples[0] === 0) {
        console.log(words[0]);
    } else {
        console.log(count);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));