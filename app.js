
const container = document.querySelector('.container');
const createButn = document.querySelector('.createNewCanvas');
const canvas = document.querySelector('.container')
const changeColor = document.querySelectorAll('.color');

let selectedColor = 'black';

changeColor.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(btn);
    console.log(btn.getAttribute('id'));
    let newColor = btn.getAttribute('id');
    switch(newColor){
        case "red":
            selectedColor = "#FF4D4D";
            break;
        case "blue":
            selectedColor = "#1638FF";
        break;
        case "yellow":
            selectedColor = "#FFD837";
        break;
        case "green":
            selectedColor = "#009B21";
        break;
        case "white":
            selectedColor = "white";
        break;
        case "erase":
            selectedColor = "black";
        break;
    }
}));


canvas.addEventListener('mousedown', e => {
    if (e.buttons == 1){
        window.addEventListener('mouseover', (eve) => {
            paintPix(eve,selectedColor);
        });
        window.addEventListener('mousedown', (eve) => {
            paintPix(eve,selectedColor);
        });
    }
    else{
        return;
    }
});

createButn.addEventListener('click', () => {
    let num;
    do{
        if(num > 100 || num < 0){
            num = prompt("Invalid Input!\nHow many squares per side would you like for your new canvas?\n Maximum of 100.");
        }
        else{
            num = prompt("How many squares per side would you like for your new canvas?\n Maximum of 100.");
        }
    }while(num > 100 || num < 0);
    container.innerHTML = "";
    createCanvas(num);
});

function paintPix(e, color){
    if(e.buttons == 1){
        if(e.target.classList == 'pix'){
            let pix = e.target;
            pix.style.backgroundColor = color;
        }
    }
}

function createCanvas(num){    
// Create 16x16 Canvas of div
    let row = ""
    for(let i = 0; i < num; i++){
        row += "<div class='pix' draggable='false'></div>";
    }
    for(let i = 0; i < num; i++){
        let box = document.createElement('div');
        box.classList.add("row");
        box.innerHTML = row;
        container.appendChild(box);
    }

}



// Paint function
// const pixs = document.querySelectorAll('.pix');
// pixs.forEach(pix => pix.addEventListener('click', () =>{
//     pix.style.backgroundColor = "white"
// }));
createCanvas(16);



