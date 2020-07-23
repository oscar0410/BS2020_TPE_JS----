let longString1 =
  "床前明月光, " + "疑似地上霜, " + "舉頭望明月, " + "低頭思故鄉。";
let longString2 =
                 "床前明月光,\ 疑似地上霜,\ 舉頭望明月,\ 低頭思故鄉。";

console.log(`${longString1}`);
console.log(`${longString2}`);

console.log("==============");

for (var i= 0; i < longString1.length; i++) {
      console.log(longString1[i]);
    
}
