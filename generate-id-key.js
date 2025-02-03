let id = [];
let abc = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < 6; i++) {
  //First, a random number is generated one by one for a 6-digit template sequence and checked against a condition. This loop repeats 6 times.

  let num = Math.floor(Math.random() * 10);
  //Each generated digit is checked to determine whether it is odd or even. If the generated number is odd, it is replaced with a random letter, and the loop continues. If the generated number is even, it is replaced with another random digit. This loop repeats until all 6 digits are completed.
  if (num % 2 === 1) {
    let rand = Math.floor(Math.random() * abc.length);
    id.push(abc[rand]);
  } else {
    id.push(Math.floor(Math.random() * 10));
  }
}
//The generated 6-digit sequence is converted into a string, and as a result of all these operations, a 6-digit ID key is created.
console.log(id.join(""));
