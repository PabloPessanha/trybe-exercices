// Checando par
function checkingEven(a, b, c){
   if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ){
      return true;
   } else{
      return false;
   }
}

// Checando ímpar
function checkingOdd(a, b, c){
   if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ){
      return false;
   } else{
      return true;
   }
}
console.log(checkingEven(3, 5, 6));

console.log(checkingOdd(1, 3, 5));