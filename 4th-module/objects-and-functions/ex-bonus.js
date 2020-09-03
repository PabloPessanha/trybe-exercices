// Usei esse post como base e escolhi a segunda resolução como a minha, com algumas modificações: https://bit.ly/3ltEqCW
function decimalToRoman(number) { 
   const romanToNumb = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   let romanNumb = "";   
   for(let roman in romanToNumb){
      while(number >= romanToNumb[roman]){ // 1st time -- 55 >= romanToNumb['L'] -> (50) / 2nd time - 5 >= romanToNumb['V'] -> (5);
         romanNumb += roman; // going define romanNumb as "L" at first, and add "V" on second time running;
         number -= romanToNumb[roman]; // 1st time -- 55 - 50 = 5 / 2nd time -- 5 - 5 = 0;
      }
   }
   return romanNumb;
} 

console.log(decimalToRoman(55));