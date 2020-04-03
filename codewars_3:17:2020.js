1. Write a function that produces an array with the numbers 0 to N-1 in it.

function arr(n){
  let answer = [];
  for (let i=0; i<n; i++){
    answer.push(i);
  }
  return answer;
}
