1. Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
  let arr = [];
  for (i = n; i >= 1; i --){
  arr.push(i);
  }
   return arr;
};
