let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function allNumbers (numbers){
   let passingThrough = "";
   for(let i = 0; i < numbers.length; i++){
      passingThrough += numbers[i] + " ";
   }
   return passingThrough;
}

function descendingNums (numbs){
   for (let i = 1; i < numbs.length; i++) {
      for (let j = 0; j < i; j++) {
         if (numbs[i] > numbs[j]) {
         let position = numbs[i];

         numbs[i] = numbs[j];
         numbs[j] = position;
         }
      }
   }
   return allNumbers(numbs);
}

function ascendingNumbs (numbs){
   for (let i = 1; i < numbs.length; i++) {
      for (let j = 0; j < i; j++) {
         if (numbs[i] < numbs[j]) {
         let position = numbs[i];

         numbs[i] = numbs[j];
         numbs[j] = position;
         }
      }
   }
   return allNumbers(numbs);
}

console.log(descendingNums(numbers));
console.log(ascendingNumbs(numbers))