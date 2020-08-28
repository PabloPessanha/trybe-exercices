// Função para verificar palidromes - Usei este video como referencia = https://youtu.be/syfPzg7zOT8
function verifyPalindrome(word){
   let palindrome = true;

   for(let initLetts = 0, lastLetts = (word.length - 1); initLetts <= lastLetts; initLetts++, lastLetts--){
      if(word.charAt(initLetts) != word.charAt(lastLetts)){
         palindrome = false;
      }
   }
   return palindrome;
}

// Função para retornar o index maior valor
let firstNumbers = [2, 3, 6, 7, 10, 1];

function biggestIndexNumber(number){
   let biggest = 0;
   for(let i = 0; i < number.length; i++){
      if(i == 0){
         biggest = number[i];
      } else if(number[i] > biggest){
         biggest = i;
      }
   }
   return biggest;
}

// Função para retornar o index do menor valor
let secondNumbers = [2, 4, 6, 7, 10, 0, -3];

function smallestIndexNumber(number){
   let smallest = 0;
   for(let i = 0; i < number.length; i++){
      if(i == 0){
         smallest = number[i];
      } else if(number[i] < smallest){
         smallest = i;
      }
   }
   return smallest;
}

// Checar o maior nome
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function checkBiggestName (){
   let biggestName = "";
   let referenceCount = 0;
   for(let i = 0; i < names.length; i += 1){
      let lettersCount = 0;
      for(let j = 0; j <= names[i].length; j += 1){
         lettersCount++;
      }
      if (lettersCount > referenceCount){
         referenceCount = lettersCount;
         biggestName = names[i];
      }
   }
   return biggestName;
}

// Contador de números mais repetidos
let repeatedNumbers = [2, 3, 2, 5, 8, 2, 3];

function mostRepeatedNumber(numbers){
   let mostRepeated = "";
   let referenceCount = 0;
   for(let i = 0; i < numbers.length; i += 1){
      let count = 0;
      for(let j = 0; j < numbers.length; j += 1){
         if(numbers[i] == numbers[j]){
            count++;
         }
      }
      if (count > referenceCount){
         referenceCount = count;
         mostRepeated = numbers[i];
      }
   }
   return mostRepeated;
}

// Soma todos os números até chegar no que foi escolhido
function sumNumbersUntilReach(n){
   let finalSum = 0;
   for(let i = 0; i <= n; i += 1){
      finalSum += i;
   }
   return finalSum;
}

// Verifica se as letras são as mesmas no fim da palavra
function checkLastLetters(word, lastLetters){
   let itsEqual = false;
   let reverseCount = word.length - 1;

   for(let i = (lastLetters.length - 1); i >= 0; i--){  
      for(;reverseCount >= 0;){
         if(word[reverseCount] == lastLetters[i]){
            itsEqual = true;
            break;
         } else {
            itsEqual = false;
            break;
         }
      }
      reverseCount--;
      if (itsEqual != true){
         break;
      }
   }
   return itsEqual;
}
