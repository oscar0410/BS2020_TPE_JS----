//  var可在同一個scope重複宣告，let、const不可以在同一個scope重複宣告
function displayName(){
    var name ="Kevin";
    var name = "David";
    let age =35;
    // let age =24;
    const height = 175;
    // const height = 188;

    console.log(name);
}

displayName();