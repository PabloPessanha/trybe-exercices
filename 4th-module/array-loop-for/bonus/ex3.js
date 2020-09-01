let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Multiplica os números lado a lado e mostra no final
function multiplyNums(numbs){
   let multiplyAside = "";
   for (let i = 0; i < numbs.length; i++) {
      for (let j = (i + 1); j < (i + 2); j++) {
         if (numbs[j] == undefined) {
            let multiply = numbs[i] * 2;

            multiplyAside += multiply + " ";
         } else {
            multiply = numbs[i] * numbs[j];

            multiplyAside += multiply + " ";
         }
      }
   }
   return multiplyAside;
}

console.log(multiplyNums(numbers));