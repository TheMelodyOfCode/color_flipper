const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const button = document.getElementById('btn');
const insertText = document.getElementById('color');

function changeTextandBGcolor (){
    
    const rgbColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('viewport').style.backgroundColor = rgbColor;
    insertText.textContent = rgbColor;
}

// Event Listeners
button.addEventListener('click', changeTextandBGcolor);






