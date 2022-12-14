const smallerButton = document.querySelector(".small");
const largerButton = document.querySelector(".large");
const placeholderText = document.querySelector(".placeholder");
let fontNum = 50;

smallerButton.addEventListener("click", function(){
    if(fontNum > 1 ){
        setFontSize("smaller");
        placeholderText.style.fontSize = `${fontNum}px`;
        largerButton.classList.remove("hidden");
    } else{
        smallerButton.classList.add("hidden");
    }
    
})

largerButton.addEventListener("click", function(){
    if (fontNum <100){
        setFontSize("larger");
        placeholderText.style.fontSize = `${fontNum}px`;
        smallerButton.classList.remove("hidden");
    } else{
        largerButton.classList.add("hidden");
    }
})


function setFontSize(arg1){
    if (arg1 === "smaller"){
        fontNum -= 10;
    } else{
        fontNum += 10;
    }
    return fontNum;
    
}