// BMI計算
var BMI = function (height, weight) {
  var result = weight / Math.pow(height / 100, 2);
  return result;
};

console.log(BMI(168, 52));
console.log(BMI(155, 42));

console.log(".".repeat(60));
// array宣告
var array = new Array();
console.log(array);
var array2 = new Array(5);
console.log(array2);

var array3 = new Array("Apple", "Samsung", "Sony", "Nokia");
console.log(array3);

console.log(".".repeat(60));
// for迴圈
var list = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
console.log(".".repeat(60));

// for-in迴圈
for (let numberIndex in list) {
  console.log(`List中的第${numberIndex}索引值 = ${list[numberIndex]}`);
}
console.log(".".repeat(60));
// for-of迴圈
for (let numberItem of list) {
  console.log(numberItem);
}
console.log(".".repeat(60));
// foreach
list.forEach(function (item, index) {
  console.log(`第${index}個-值=${item}`);
});

console.log(".".repeat(60));
// map --> 可想成是 C# LINQ的select
var listByMap = list.map((x) => x * 2);
console.log(listByMap);

console.log(".".repeat(60));
//reduce --> 可想成是做遞迴
var listByreduce = list.reduce(function (total, current) {
  console.log(`當前total = ${total},當前current = ${current}`);
  return total + current;
});
console.log(`listByreduce最後總和 = ${listByreduce}`);

console.log(".".repeat(60));
// 陣列的連結
list2 = ["A", "B", "C", "D", "E", "F"];
var r1 = list.concat(list2);
console.log(r1);

console.log([...Array(10).keys()].map((x) => (x + 1) * 10));

// 物件建立
console.log(".".repeat(60));
var person = {
  firstName: "Maxine",
  lastName: "Chii",
  height: 158,
  weight: 45,
  gender: "F",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  sing: function () {
    console.log("La~~La~");
  },
  phone: {
    home: "02-12345678",
    office: "03-87654321",
    tel: "09-12356748",
  },
};
// 物件的方法，只能用 object.function()使用
console.log(person.fullName());
person.sing();
console.log(person.gender);
console.log(person);
console.log(`Moblie-phone : ${person.phone.tel}`);

// Math.random -->產生一個0~1之間的數字
console.log(Math.random());


// 取得10個1~100的亂數
function getRandom(min, max) {
  return Math.floor(Math.random() * max + min);
}
for(let i=1;i<=10;i++){
    console.log(getRandom(1,100));
}
