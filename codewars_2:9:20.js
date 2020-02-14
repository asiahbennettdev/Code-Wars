1. Very simple, given a number, find its opposite.
function opposite(number) {
   return(-number);
}

2. Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
function paperwork(n, m) {
 if (n < 0 || m < 0){
  return 0;
} else{
  return (n * m);
  }
 }

3. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
  return `${str}`.slice(1, -1)
};

4.Get the number n (n>0) to return the reversed sequence from n to 1.
Example : n=5 >> [5,4,3,2,1]
const reverseSeq = n => {
  let arr = [];
  for (i = n; i >= 1; i --){
  arr.push(i);
  }
   return arr;
};

5. Complete the solution so that it reverses the string value passed into it.
function solution(str){
  return str.split("").reverse().join("")
}
