function writeMeta() {
    //alert('ok');
    $("meta[name='viewport']").attr('content', 'width=device-width, initial-scale=0.4'); 
    //$("#page").html(''); 
}
window.onload = writeMeta;

let isDrawing = false;

const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
    };
};

makeGrid(16, 16);

const cells = document.querySelectorAll('.grid-item');
cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    cell.addEventListener('mousemove', () => {
        if (isDrawing)
            cell.classList.add('highlight');
    });

    // for mobile
    cell.addEventListener('touchstart', () => {
        isDrawing = true;
    });
    cell.addEventListener('touchmove', () => {
        if (isDrawing)
            cell.classList.add('highlight');
    });
});

window.addEventListener('mouseup', () => {
    if (isDrawing) {
        isDrawing = false;
    }
});
