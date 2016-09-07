cmdlineArgs = process.argv.slice(2);

console.log( countLetters( cmdlineArgs[0].toLowerCase() ) )

function countLetters( curString ){
  curString = curString.split("");
  var myObj = {};
  for( char in curString ){
    if( curString[char] !== " " ){
      if( myObj.hasOwnProperty(curString[char]) ){
        myObj[curString[char]]++;
      }
      else {
        myObj[curString[char]] = 1;
      }
    }
  }
  return myObj;
}

