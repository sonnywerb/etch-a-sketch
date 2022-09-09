let isDrawing = false;

// get the container to store the grid
const container = document.getElementById('container');

function makeGrid(n) {
    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    for (i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.textContent = i;
        cell.className = 'cell';
        container.append(cell);
    }
}
makeGrid(16);

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        cell.classList.add('draw');
    });
    cell.addEventListener('mousemove', () => {
        if (isDrawing)
            cell.classList.add('draw');
    });
});

window.addEventListener('mouseup', () => {
    if (isDrawing) {
        isDrawing = false;
    }
});
