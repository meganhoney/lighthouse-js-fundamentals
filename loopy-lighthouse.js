// for loops require three statements separated by semicolons
//first to initialize the loop (declare the counter variable)
//second for defining while condition
//last for updating the state of the loop after every step
for (let count = 100; count < 201; count++) {
  if ((count % 3 === 0) && (count % 4 === 0)){
    console.log("LoopyLighthouse");
  } else if (count % 4 === 0){
      console.log("Lighthouse");
  } else if (count % 3 === 0) {
      console.log("Loopy");
  } else {
      console.log(count);
  }
}