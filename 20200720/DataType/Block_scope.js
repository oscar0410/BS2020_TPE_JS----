var x = 1;
let y = 2;
const z = 3;

{
  var x = 3;
  let y = 6;
  const z = 9;

  console.log(x);
  console.log(y);
  console.log(z);
}

console.log(x);
console.log(y);
console.log(z);
