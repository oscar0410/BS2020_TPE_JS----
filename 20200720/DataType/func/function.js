function GetArea(width,height){
    return width*height;
}

const RectArea = function(width,height){
    return width*height;
}

const rectArea = new Function('height','width','return height * width');


const FullName = (firstname,lastname)=>{return firstname+lastname};

console.log(FullName("Maxine ","Chii"));