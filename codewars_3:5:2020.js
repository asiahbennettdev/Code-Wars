1. You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.

function pattern(n){
 var output="";
 if (n<1) {
   return ""
 }else if(n === 1){
   return "1"
 }else {
   for (var i = 1; i<=n; i++){
     for (var j = 1; j <=i; j++){
       output+=i
     }
    if (i === n){
      break
    } else {
       output+="\n"
    }
   }
 }
   // Happy Coding ^_^
 return output;
}
