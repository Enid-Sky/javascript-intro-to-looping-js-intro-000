//declare a function,
//input: array 
//output: "I am i strange loop" & if i value is anything else, "I am ${i} strange loop"
//return array

function forLoop (array) {
  for(var i = 0 ; i < 25; i++) {
    if(i === 1) {
    array.push("I am 1 strange loop.");
    } else {
    array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number){
while (number > 0) {
  console.log(--number);
}
return ("done");
}


//create function, doWhileLoop
//input: integer

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);

