
const button = document.getElementById('btn');
const insertText = document.getElementById('color');

function changeTextandBGcolor (){
    
    const hexCode = (Math.random() * 0xfffff * 1000000).toString(16);
    const fullHexNo = '#' + hexCode.slice(0, 6);
    document.getElementById('viewport').style.backgroundColor = fullHexNo;
    insertText.textContent = fullHexNo;
}



// Event Listeners
button.addEventListener('click', changeTextandBGcolor);






