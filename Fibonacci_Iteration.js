function fibs(num){
  //x represents the first term,
  //y represents the second term
  //z represents the sum of x and y

  let answer = []
  let x=0;
  let y=1;

  let z;

  let i=0;


  answer.push(x);
  answer.push(y);
  
  for( i = 2; i < num; i++) {
    z = x + y;
    x = y;
    y = z;

    answer.push(z);
  }
  return y;
}


let num = 7;
answer = fibs(num);

console.log("the 7th term of the Fiobonacci series is: ", answer);