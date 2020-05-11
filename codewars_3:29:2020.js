/* Given a non-negative integer num,
return the number of steps to reduce it to zero.
If the current number is even, you have to divide it by 2, otherwise,
you have to subtract 1 from it. */

var reduceZero  = function(num) {
 let number = 0;
 while (num !== 0){
   if (num % 2 == 0){
     num = num / 2;
     number ++;
   }else{
     num -=1;
     number ++;
   }
  }return number
};
