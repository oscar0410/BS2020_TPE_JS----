var x=1;
{
    var x=3;
    function setValue(){
        var x=5;
        console.log(x);
    }
    console.log(x);
}

setValue();
console.log(x);