function loop1()
{
    for(var i=0; i<3; i++){
        console.log(i);
    }
    console.log(i);
}

function loop2()
{
    //用let宣告for迴圈的變數，只存在for迴圈裏面
    for(let i=0; i<8; i++){
        console.log(i);
    }
    //loop2無宣告i變數
    console.log(i);
}

loop1();
loop2();