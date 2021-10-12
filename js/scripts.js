const tabContainer = document.getElementById("tab_container");

const row = document.createElement("div");
row.classList.add("row", "row-cols-7", "gx-2");
tabContainer.append(row);

for (let i = 1; i <= 100; i++) {

    let bgColor = "";

    const multiplo3 = i % 3 === 0;

    if (multiplo3) {
        bgColor = "bg-success";
    }


    const col = document.createElement("div");
    col.classList.add("col", "border", "ratio", "ratio-1x1", "d-flex", "justify-content-center", "align-items-center", `"${bgColor}"`);

    col.textContent = `${i}`;

    row.append(col);
}




