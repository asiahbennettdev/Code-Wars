1. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.


function squareDigits(num){
  var numbers = num.toString().split('')
  var divideNum = numbers.map(n => n * n) //Return an array with the square root
  var squareRoot = divideNum.join('')
  return +squareRoot
}
