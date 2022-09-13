let color = false;

// get the container to store the grid
const container = document.getElementById('container');
// get size of container
let containerLength = getContentLength(container);

function getContentLength (element) {
    let styles = getComputedStyle(element)
  
    return element.clientWidth
      - parseFloat(styles.paddingLeft)
      - parseFloat(styles.paddingRight)
}

function createGrid(n) {
    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    let totalCells = n * n;
    let cellArea = (containerLength * containerLength)/totalCells;
    let cellLength = Math.sqrt(cellArea);
    for (i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.setAttribute('style', `width: ${cellLength}px; height: ${cellLength}px`);
        container.append(cell);
    }
    draw();
}

createGrid(16);

function deleteGrid() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
        container.removeChild(item);
    });
}

function draw() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            if (color) {
                e.target.style.backgroundColor = randomColor();
            } else {
                e.target.style.backgroundColor = '#000000';
            }
        });
    });
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`
}

function erase() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'transparent';
        });
    });
}
const eraseBtn = document.getElementById('eraser');
eraseBtn.addEventListener('click', erase);

// Button Functionalities
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'transparent';
    });
}
const clearGridBtn = document.getElementById('clear-grid');
clearGridBtn.addEventListener('click', clearGrid);

function newGrid() {
    let size = prompt("Please enter the size of new grid (1 - 50)", '16');
    if (size === null) {
        return;
    }else if (isNaN(size) || size === "") {
        alert('ERROR: Please input a number!'); 
    } else if (size < 1 || size > 50) {
        alert('ERROR: Please input a size between 1 and 50!');
    } else {
        deleteGrid();
        createGrid(size);
    }
}
const newGridBtn = document.getElementById('new-grid');
newGridBtn.addEventListener('click', newGrid);

const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
    color = false;
    draw();
});

const colorBtn = document.getElementById('color');
colorBtn.addEventListener('click', () => {
    color = true;
    draw();
});