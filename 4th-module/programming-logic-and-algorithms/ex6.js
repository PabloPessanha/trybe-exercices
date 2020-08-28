function primeOrNotCheck(number){
   let result = 0;
   for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
      result++;
      break;
      }
   }
   if (result == 0){
    return `The number ${number} is prime`;
   }else{
    return `The number ${number} isn't prime`;
   }
}

console.log(primeOrNotCheck(12))