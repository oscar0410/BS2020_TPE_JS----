console.log(typeof x);
console.log(x === undefined);
var x=5;

var product = "iPhone";
(function(){
    console.log(product);
    var product = "Android";
})();

console.log(product);