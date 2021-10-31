// EDIBAT - Chess Board Challenge

function chessBoard(pole) {
	  let chessName=pole[0].toUpperCase()
   let chessNumber=parseInt(pole[1]);
   if(chessName=='A'||chessName=='C' || chessName=='E' || chessName=='G'){
     if(chessNumber%2==0) return 'white'
     else return 'black'
   }else{
     if(chessNumber%2==0) return 'black'
     else return 'white'
   }
}


chessBoard("a1") 
// ➞ "black"

chessBoard("e5") 
// ➞ "black"

chessBoard("d1") 
// ➞ "white"