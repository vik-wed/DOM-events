const colorInput = document.querySelector(".color-picker");
const colorArray = ["black", "brown", "cyan", "darkblue", "darkgray", "green", "yellow", "red"];
const pageBckg = document.querySelector("body");
const submitColorButton = document.querySelector("button");


function checkValue(){
    if (colorArray.includes(colorInput.value)){
        return true;
    }
}
function colorSelector(){
    if (checkValue()){
        pageBckg.style.backgroundColor = `${colorInput.value}`;
    } else {
        pageBckg.style.backgroundColor = "white";
    }
}

submitColorButton.addEventListener("click", colorSelector)


