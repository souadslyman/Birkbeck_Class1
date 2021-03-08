// function fizzBuzz(num) {
//   if (Number.isInteger(num) === false || num <= 0) {
//     console.log("Input is not an integer or positive")
//     return;
//   } else if (num % 15 === 0) {
//     return "FizzBuzz";
//   } else if (num % 3 === 0) {
//     return "Fizz";
//   } else if (num % 5 === 0) {
//     return "Buzz";
//   } else {
//     return num;
//   }
// }

const fizzBuzz = num => {
    return num % 15 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : num;
    // if (Number.isInteger(num) === false || num <= 0) {
    //   console.log("Input is not an integer or positive")
    //   return;
    // } else if (num % 15 === 0) {
    //   return "FizzBuzz";
    // } else if (num % 3 === 0) {
    //   return "Fizz";
    // } else if (num % 5 === 0) {
    //   return "Buzz";
    // } else {
    //   return num;
    // }
  }
  
  fizzBuzz(0)
  fizzBuzz(-10)
  fizzBuzz(-4.5)
  fizzBuzz(4.5)
  
  console.log(fizzBuzz(30))
  console.log(fizzBuzz(9))
  console.log(fizzBuzz(10))
  console.log(fizzBuzz(14))
  
  
  const fizzBuzzCounter = num => {
    for (let rep = 1; rep <= num; rep++) {
      console.log(fizzBuzz(rep))
    }
  }
  
  fizzBuzzCounter(10);
  fizzBuzzCounter(50);
  
  
  // console.log(false === false)
  // console.log(0 === false)