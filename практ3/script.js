/**
* @param {number} n
* @returns {number[]}
*/
function sieveOfEratosthenes(n) {
  if (!Number.isInteger(n) || n < 2) return [];

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
function gcdIterative(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
function gcdRecursive(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

/**
* @param {number} x
* @param {number} n
* @returns {number}
*/
function power(x, n) {
  if (n === 0) return 1;
  if (x === 0 && n < 0) {
    throw new Error("0 не можна підносити до від'ємного степеня");
  }

  let exponent = Math.abs(n);
  let base = x;
  let result = 1;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }

  return n < 0 ? 1 / result : result;
}

/**
* @param {number} x
* @returns {number}
*/
function integerSqrt(x) {
  if (!Number.isInteger(x) || x < 0) {
    throw new Error("x має бути невід'ємним цілим числом");
  }

  if (x < 2) return x;

  let left = 1;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    }

    if (square < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

/**
 * @param {number} n
 * @returns {number}
*/
function trailingZeroes(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n має бути невід'ємним цілим числом");
  }

  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

console.log("Sieve of Eratosthenes:");
console.log("n = 30 -", sieveOfEratosthenes(30)); 

console.log("\nGreatest Common Divisor:");
console.log("Ітеративно gcd(48, 18) -", gcdIterative(48, 18));
console.log("Рекурсивно gcd(48, 18) -", gcdRecursive(48, 18));

console.log("\n3. Power Function:");
console.log("power(2, 10) -", power(2, 10));
console.log("power(2, -2) -", power(2, -2));
console.log("power(5, 0) -", power(5, 0));

console.log("\n4. Square Root:");
console.log("integerSqrt(8) -", integerSqrt(8));
console.log("integerSqrt(16) -", integerSqrt(16));

console.log("\n5. Factorial Trailing Zeroes:");
console.log("trailingZeroes(5) -", trailingZeroes(5));
console.log("trailingZeroes(10) -", trailingZeroes(10));
console.log("trailingZeroes(25) -", trailingZeroes(25));
