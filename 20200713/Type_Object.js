var obj = new Object();
var object = {};

var person = {
    name : "Oscer",
    email : "a127309512@gmail.com",
    phone : "0920-412918"
};

var employee = {
    name : "Maxine",
    email : "sherry0620@gmail.com",
    title : "CMO",
    phone : {
        home : "02-12345678",
        office : "03-12345678",
        mobile : "09-12345678"
    }
};


console.log(`${person.name}, ${person.email}, ${person.phone}`);
console.log(`${person["name"]}, ${person["email"]}, ${person["phone"]}`);

console.log(`${employee.name} , ${employee.phone.mobile}`);
console.log(`${employee["title"]}, ${employee["phone"]["home"]}`);


for(const prop in employee){
    console.log(`${prop}`);
    }
    for(const prop in employee){
    console.log(`employee.${prop}:${employee[prop]}`);
    }