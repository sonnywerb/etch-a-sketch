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

function deleteGrid() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
        container.removeChild(item);
    });
}

function draw() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener('mousemove', () => {
            cell.classList.add('draw');
        });
    });
}

// Button Functionalities
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    const drawnCells = document.querySelectorAll('.draw');
    drawnCells.forEach((drawnCell) => {
        drawnCell.classList.remove('draw');
    });
});

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
const newGridBtn = document.getElementById('newGrid');
newGridBtn.addEventListener('click', newGrid);

createGrid(16);