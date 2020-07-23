let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");

console.log(Sym1==Sym2);
console.log(Sym1===Sym2);

console.log(typeof(Sym1));
console.log(Sym1.toString());

let sym = Symbol('foo')
let obj = {[sym]: 1}
console.log(obj[sym])             // 1
console.log(obj[Object(sym)])     // still 1