var firstNumber = 7;
var secondNumber = 10;
var thirdNumber = 20;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
   console.log(firstNumber, "is bigger than", secondNumber, "and", thirdNumber);

} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
   console.log(secondNumber, "is bigger than", firstNumber, "and", thirdNumber);
   
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
   console.log(thirdNumber, "is bigger than", firstNumber, "and", secondNumber);
}
