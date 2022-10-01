const defaultSize = 16;
const defaultColor = 'white';

let currentSize = defaultSize;
let currentColor = defaultColor;

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

const grid = document.getElementById('grid');
const sizeBtn = document.getElementById('sizeBtn');

sizeBtn.onclick = () => updateSizeValue();

function updateSizeValue(){
    let newSizeValue = parseInt(prompt("Enter a new value (less than 100 please!)"));
    while(newSizeValue > 100){
        newSizeValue = parseInt(prompt("I said less than 100 PLEASE"))
    }
    // let newSizeInt = parseInt(newSizeValue);
    setCurrentSize(newSizeValue);
    reloadGrid();
}

function reloadGrid(){
    setupGrid(currentSize);
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', colorIn)
        // gridElement.addEventListener('mouseout', colorOut)
        grid.appendChild(gridElement)
    }
}

function colorIn(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    setCurrentColor(`rgb(${randomR}, ${randomG}, ${randomB})`);
    e.target.style.background = currentColor;
};

function colorOut(e) {
    e.target.style.background = defaultColor;
}

window.onload = () => {
    setupGrid(defaultSize);
  }

