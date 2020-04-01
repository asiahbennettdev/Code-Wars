1. Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

function capitalize(s){
  even = []
  odd = []
   for (let i=0; i<s.length; i++){
     if (i % 2 ===0){
      even.push(s.charAt(i).toLowerCase())
      odd.push(s.charAt(i).toUpperCase())
    }else{
      even.push(s.charAt(i).toUpperCase())
      odd.push(s.charAt(i).toLowerCase())
    }
  }
  return[odd.join(""), even.join("")]
//   capitalize("abracadabra");

};
