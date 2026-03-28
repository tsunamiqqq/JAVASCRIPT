function fizzBuzz(n) {
  const result = [];

  if (!Number.isInteger(n) || n < 1) {
    return result;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
}

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
