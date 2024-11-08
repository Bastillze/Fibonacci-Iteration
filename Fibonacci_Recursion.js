function fibsRec(num){
  //x represents the first term,
  //y represents the second term
  //z represents the sum of x and y


  let array = [];

  array[0] = 0;
  array[1] = 1;

 for (let i = 2; i < num; i++) {
  //Storing sum as the current element
  array[i] = array[i - 2] + array[i - 1];
 }

return array;
}

let num = 8;
answer = fibsRec(num);

console.log("the 8th term of the Fiobonacci series is: ", answer);