function chessMovement (a){
   let piece = a.toLowerCase();
   if (a.toLowerCase() == 'bishop'){
      return `${piece}, move's diagonally.`;
   } else if (a.toLowerCase() == 'queen'){
      return `${piece}, move's diagonally, horizontally or vertically.`;
      
   } else if (a.toLowerCase() == 'king'){
      return `${piece}, move's one square in any direction.`;
      
   } else if (a.toLowerCase() == 'knight'){
      return `${piece}, move's two squares in a horizontal or vertical direction.`;
      
   } else if (a.toLowerCase() == 'rook'){
      return `${piece}, move's horizontally or vertically.`;
      
   } else if (a.toLowerCase() == 'pawn'){
      return `${piece}, move's vertically forward one square, with the option to move two squares if they have not yet moved.`;

   } else {
      return "isn't a Chess Piece!";
   }
}
console.log(chessMovement("PAWN"));