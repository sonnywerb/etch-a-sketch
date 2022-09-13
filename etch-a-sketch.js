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

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    const drawnCells = document.querySelectorAll('.draw');
    drawnCells.forEach((drawnCell) => {
        drawnCell.classList.remove('draw');
    });
});

const newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', () => {
    let size = prompt("Please enter the size of new grid", '16');
    if (size === null) {
        return;
    }
    size =  parseInt(size);
    deleteGrid();
    createGrid(size);
})

// user clicks new grid
// a prompt will come up to ask for size of grid
// user inputs grid size
// pass the input into the createGrid parameter

createGrid(16);