const print = function(... Args){
    console.log(typeof Args);
    console.log(Args instanceof Array);
    console.log(Args[0]);
    console.log(Args[1]);
    console.log(Args[2]);
    console.log(Args.join());
}

print("白日依山盡","黃河入海流","舉頭望明月","低頭思故鄉");
