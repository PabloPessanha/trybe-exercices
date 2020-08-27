function checkingProfit(originalPrice, sellPrice){
   if(originalPrice < 0 || sellPrice < 0){
      return `Error: the value is invalid`
   } else {
   let finalPrice = originalPrice + (originalPrice * 0.2);
   let profit = sellPrice - finalPrice;
   return `Your profit is ${profit}$`
   }
}

console.log(checkingProfit(15, 30));