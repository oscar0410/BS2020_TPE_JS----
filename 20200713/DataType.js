// console.log(Boolean(1));

// console.log(1===true);

// console.log(Boolean(0));

// console.log(1==true);

// console.log(person);

// var person1 = null;
// console.log(person1);
// console.log(typeof person1);
// console.log(typeof(person1));

// var person2;
// console.log(person2);
// console.log(typeof person2);
// console.log(typeof(person2));

// var Age = 25;
// console.log(Age);
// console.log(typeof Age);
// console.log(typeof(Age));


function checkValue(value){
    if(value===undefined){
        return 'undefined value!未定議的值';
    }
    return '傳入的為: '+value;
}

let name = 20;
let nickname = 'super man';
console.log(checkValue(name));


const age ='3';
console.log(age.padStart(3,'0'));
console.log(age.padEnd(3,'0'));