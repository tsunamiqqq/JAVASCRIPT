function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s+/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
