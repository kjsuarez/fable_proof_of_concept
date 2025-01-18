const image_manifest_url = "https://api.github.com/repos/kjsuarez/fable_proof_of_concept/git/trees/master?recursive=1";

window.addEventListener("load", async()=>{
    const grid = document.getElementById("grid");
    let row = insert_row(grid);
    
    let file_paths = await get_images(image_manifest_url);

    for (let i = 0; i < file_paths.length; i++) {
        const path = file_paths[i];
        insert_img(path, row);
        if ( (i+1)%3 == 0) {
            row = insert_row(grid);
        }
    }
});

async function get_images(url) {
    const response = await fetch(image_manifest_url);
    if(response.ok){
        const files = await response.json();
        let file_paths = files["tree"]
        .map((file) => file["path"])
        .filter((path) => path.includes("images/"));
        return file_paths
    } else {
        return[]
    }
}

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
