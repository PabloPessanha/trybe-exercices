// Função para remover ultima linha, encontrei a solução no seguinte link: https://bit.ly/3gKTTv3
function removeLastLine (x){
   if(x.lastIndexOf("\n")>0) {
      return x.substring(0, x.lastIndexOf("\n"));
  } else {
      return x;
  }
}

// Quadrado com asteriscos
function asteriskSquare (){
   let finalSquare = "";
   for(let n = 5; n > 0; n--){
      let square = "";
      for(let j = 1; j <= 5; j++){
         square += "*";
      }
      finalSquare += square + "\n";
   }
   return finalSquare;
}

// Triangulo retangular
function asteriskRectangleTriangle (){
   let finalTriangule = "";
   for(let n = 1; n <= 5; n++){
      let triangule = "";
      for(let j = 1; j <= n; j++){
         triangule += "*";
      }
      finalTriangule += triangule + "\n";
   }
   return removeLastLine(finalTriangule);
}

// Triangulo retangular invertido
function asteriskRectangleTriangleInvert (){
   let finalTriangule = "";
   for(let n = 5; n >= 1; n--){
      let triangule = "";
      for(let j = 1; j <= 5; j++){
         if( j < n ){
         triangule += " ";
         } else {
         triangule += "*";
         }
      }
      finalTriangule += triangule + "\n";
   }
   return removeLastLine(finalTriangule);
}

// Piramide
function asteriskPyramid (){
   let finalPyramid = "";
   for(let n = 1; n <= 5; n++){
      let pyramid = "";
      for(let j = 1; j <= 5; j++){
         if ( n == 1 || n == 5){
            pyramid = " ";
         }
         if(n == 2){
            if(j == 3){
            pyramid += "*";
            } else {
            pyramid += " ";
            }
         } else if (n == 3){
            if( j > 1 && j < 5){
               pyramid += "*";
            } else {
               pyramid += " ";
            }
         } else if (n == 4){
            pyramid += "*";
         } 
      }
      finalPyramid += pyramid + "\n";
   }
   return removeLastLine(removeLastLine(finalPyramid));
}

// Bonus: piramide vazia no meio
function asteriskPyramidEmpty (){
   let finalPyramid = "";
   for(let n = 1; n <= 6; n++){
      let pyramid = "";
      for(let j = 1; j <= 7; j++){
         if ( n == 1 || n == 6){
            pyramid = " ";
         }
         if(n == 2){
            if(j == 4){
            pyramid += "*";
            } else {
            pyramid += " ";
            }
         } else if (n == 3){
            if( j == 3 || j == 5){
               pyramid += "*";
            } else {
               pyramid += " ";
            }
         } else if (n == 4) {
            if( j == 2 || j == 6){
               pyramid += "*";
            } else {
               pyramid += " ";
            }
         } else if (n == 5){
            pyramid += "*";
         } 
      }
      finalPyramid += pyramid + "\n";
   }
   return removeLastLine(removeLastLine(finalPyramid));
}

console.log(asteriskPyramidEmpty())