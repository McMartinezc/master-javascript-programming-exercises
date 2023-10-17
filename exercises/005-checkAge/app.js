function checkAge(name, age) {
  // your code here
  return (age >= 21) ? `Welcome, ${name}!` : `Go home, ${name}!`;
}

console.log(checkAge("Mc", 21));
console.log(checkAge("Mc", 20));