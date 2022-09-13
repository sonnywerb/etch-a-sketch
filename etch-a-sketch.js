// get the container to store the grid
const container = document.getElementById('container');
// get size of container
let containerLength = getContentLength(container);

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
}
createGrid(25);

function getContentLength (element) {
    let styles = getComputedStyle(element)
  
    return element.clientWidth
      - parseFloat(styles.paddingLeft)
      - parseFloat(styles.paddingRight)
}

const cells = document.querySelectorAll('.grid-item');
cells.forEach((cell) => {
    cell.addEventListener('mousemove', () => {
        cell.classList.add('draw');
    });
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('draw');
    });
});
