1.Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var count = 0;
  let letter = str.split('', str.length)
  let vowelsCount = 0
  for (i=0;i<letter.length; i++){
    if(letter[i] === 'a' || letter[i] === 'e' || letter[i] === 'i' || letter[i] === 'o' || letter[i] === 'u'){
    vowelsCount++
    }
    else{vowelsCount+=0}
  }
  return vowelsCount
}
