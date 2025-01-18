var fs = require('fs');


window.addEventListener("load", (event) => {
    const grid = document.getElementById("grid");
    let row = insert_row(grid);
    insert_img("images/cat.jpg", row);
});

function insert_row(grid) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    return row;
}

function insert_img(url, row) {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("image");
    row.appendChild(img);
}
