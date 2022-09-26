const container = document.getElementById('container');

function makeRows(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = "grid-item";
    };
};

makeRows(16, 16);
