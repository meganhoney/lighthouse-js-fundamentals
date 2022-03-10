function range (start, end, step) {
  let rangeOfNumbers = [];
  if(start === null || end === null || step === null || end < start || step < 0) {
    rangeOfNumbers = [];
  } else {
    for(var i = start; i <= end; i = i + step) {
      rangeOfNumbers.push(i);
    }
  }
  return rangeOfNumbers; 
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
