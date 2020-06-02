1. Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]



function avgArray(arr) {
  let result =[];
  for(var i in arr[0]){
    var num = 0;
    for(var j in arr)
      num += arr[j][i];
    result.push(num/arr.length)
  }
  return result;
}
