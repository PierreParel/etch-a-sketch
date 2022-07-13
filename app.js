
const container = document.querySelector('.container');
const createButn = document.querySelector('.createNewCanvas');



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

function createCanvas(num){    
// Create 16x16 Canvas of div
    let row = ""
    for(let i = 0; i < num; i++){
        row += "<div class='pix'></div>";
    }
    for(let i = 0; i < num; i++){
        let box = document.createElement('div');
        box.classList.add("row");
        box.innerHTML = row;
        container.appendChild(box);
    }
    const pixs = document.querySelectorAll('.pix');
    pixs.forEach(pix => pix.addEventListener('click', () =>{
        pix.style.backgroundColor = "red"
    }));
}

createCanvas(16);



