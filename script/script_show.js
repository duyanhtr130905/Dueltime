const a = ["BG1.webp", "BG2.jpg", "BG3.jpg", "BG4.jpg"];
let index = 0;
function slider() {
    document.getElementsByClassName("slide_show").innerHTML = `<img class=\"image\" src=\"./images/slider/${a[index]}\">`
}

let slide;
function runSlider(){
    slide = setInterval(() => {
        ++index;
        if(index == a.length){
            index = 0;
        }
        slider();
    }, 4000);
}

runSlider();