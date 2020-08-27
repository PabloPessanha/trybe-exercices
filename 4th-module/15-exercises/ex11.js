function checkGrades (percent){
   number = percent;
   if (number <= 100 && number >= 90){
      return `Your grade is A`;
   } else if (number <= 89 && number >= 80){
      return `Your grade is B`;
   }else if (number <= 79 && number >= 70){
      return `Your grade is C`;
   }else if (number <= 69 && number >= 60){
      return `Your grade is D`;
   }else if (number <= 59 && number >= 50){
      return `Your grade is E`;
   }else if (number < 50 && number > 0){
      return `Your grade is F`;
   } else {
      return `Error: parameter not accepted`
   }
}
console.log(checkGrades(73)) 