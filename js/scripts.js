const tabContainer = document.getElementById("tab_container");
tabContainer.classList.add("fw-bold");

const row = document.createElement("div");
row.classList.add("row", "g-5");
tabContainer.append(row);

for (let i = 1; i <= 100; i++) {

    let bgColor = "bg-primary";
    let contenuto = i;

    const multiplo3 = i % 3 === 0;
    const multiplo5 = i % 5 === 0;


    if (multiplo3 && multiplo5) {
        bgColor = "bg-danger";
        contenuto = "fizzbuzz";
    } else if (multiplo5) {
        bgColor = "bg-warning";
        contenuto = "buzz";
    } else if (multiplo3) {
        bgColor = "bg-success";
        contenuto = "fizz";
    }


    const myCol = document.createElement("div");
    myCol.classList.add("my-col", "d-flex", "justify-content-center", "align-items-center");




    const myBox = document.createElement("div");
    myBox.classList.add("my-box", "ratio", "ratio-1x1", "d-flex", "justify-content-center", "align-items-center", bgColor);
    myBox.textContent = contenuto;


    row.append(myCol);
    myCol.append(myBox);
}




