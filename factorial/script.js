function factorial(number){
  var result = number;
  if (number < 0) return -1;
  if (number == 0) return 1;
  while (number > 1) { 
    number--; 
    result = result * number;
  }
return result;
}

console.log(factorial(5));
console.log(factorial(3));