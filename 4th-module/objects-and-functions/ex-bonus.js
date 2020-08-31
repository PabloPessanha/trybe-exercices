// Usei esse post como base e escolhi a segunda resolução como a minha, com algumas modificações: https://bit.ly/3ltEqCW
function decimalToRoman(number) { 
   const numToRoman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   let romanNumb = "";   
   for(roman in numToRoman){
      while(number >= numToRoman[roman]){ // 1st time -- 55 >= numToRoman['L'] -> (50) / 2nd time - 5 >= numToRoman['V'] -> (5);
         romanNumb += roman; // going define romanNumb as "L" at first, and add "V" on second time running;
         number -= numToRoman[roman]; // 1st time -- 55 - 50 = 5 / 2nd time -- 5 - 5 = 0;
      }
   }
   return romanNumb;
} 

decimalToRoman(55);