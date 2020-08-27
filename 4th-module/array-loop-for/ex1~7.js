let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Mostrando todos os números do array
function allNumbers (numbers){
   let passingThrough = "";
   for(let i = 0; i < numbers.length; i++){
      passingThrough += numbers[i] + " ";
   }
   return passingThrough;
}

// Somando todos os números do array
function sumNumbers (numbers){
   let sumNumbersFinal = 0;
   for(let i = 0; i < numbers.length; i++){
      sumNumbersFinal += numbers[i];
   }
   return sumNumbersFinal;
}

// Fazendo a média dos números
function mediaNumbers (numbers){
   let sumNumbers = 0;
   for(let i = 0; i < numbers.length; i++){
      sumNumbers += numbers[i];
   }
   return sumNumbers / (numbers.length - 1);
}

// Verificando se é maior, igual ou menor que 20 
function verify20 (numbers){
   let sumNumbers = 0;
   for(let i = 0; i < numbers.length; i++){
      sumNumbers += numbers[i];
   }
   let finalValue = sumNumbers / (numbers.length - 1);
   if(finalValue > 20){
      return `Value ${finalValue} is bigger than 20`;
   } else {
      return `Value ${finalValue} is equal or less than 20`;
   }
}

// Checando o maior número do array
function checkBiggerNum (numbers){
   let biggerNumber = 0;
   for(let i = 0; i < numbers.length; i++){
      if(biggerNumber < numbers[i]){
         biggerNumber = numbers[i];
      }
   }
   return biggerNumber;
}

// Checando números ímpares de um array
function checkOddNums (numbers){
   let oddNums = "";
   for(let i = 0; i < numbers.length; i++){
      if(!(numbers[i] % 2 == 0)){
         oddNums += numbers[i] + " ";
      }
   }
   if (oddNums == ""){
      return `No odd numbers`;
   } else {
      return oddNums;
   }
}

// Checando o menor número do array
function checkSmallerNum (numbers){
   let smallerNumber = 0;
   for(let i = 0; i < numbers.length; i++){
      if(i == 0){
         smallerNumber = numbers[i];
      }
      if(smallerNumber > numbers[i]){
         smallerNumber = numbers[i];
      }
   }
   return smallerNumber;
}

console.log(checkSmallerNum(numbers));