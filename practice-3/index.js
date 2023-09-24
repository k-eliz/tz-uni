const data = "";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //
  .then((data) => {
    this.data = data;
    displayData(this.data);
  });

function displayData(data) {
  let tableBody = document.querySelector("#myTable tbody");
  for (let i = 0; i < data.length; i++) {
    let row = tableBody.insertRow();
    let nameCell = row.insertCell(0);
    let descriptionCell = row.insertCell(1);
    let bodyCell = row.insertCell(2);
    nameCell.innerHTML = data[i].id;
    descriptionCell.innerHTML = data[i].title;
    bodyCell.innerHTML = data[i].body;
  }
}
let table = document.getElementById("myTable");
function tableSearch() {
  let phrase = document.getElementById("myInput");

  let regPhrase = new RegExp(phrase.value, "i");
  let flag = false;
  for (let i = 1; i < table.rows.length; i++) {
    flag = false;
    for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
      if (flag) break;
    }
    if (flag) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
  }
}
table.onclick = function (e) {
  if (e.target.tagName != "th") {
    return;
  }
  let th = e.target;
  sortTable(th.cellIndex, th.dataset.type);
};

const sortingDirections = [1, 1, 1];

function sortTable(colNum, type) {
  let tbody = table.querySelector("tbody");
  let rowsArray = Array.from(tbody.rows);
  let compare;
  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return (
          (rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML) *
          sortingDirections[colNum]
        );
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1 * sortingDirections[colNum]
          : -1 * sortingDirections[colNum];
      };
      break;
  }
  sortingDirections[colNum] *= -1;
  rowsArray.sort(compare);
  for (let i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }
}
