const data = "";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //
  .then((data) => {
    this.data = data;
    displayData(this.data);
  });

function displayData(data) {
  var tableBody = document.querySelector("#myTable tbody");
  for (var i = 0; i < data.length; i++) {
    var row = tableBody.insertRow();
    var nameCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var bodyCell = row.insertCell(2);
    nameCell.innerHTML = data[i].id;
    descriptionCell.innerHTML = data[i].title;
    bodyCell.innerHTML = data[i].body;
  }
}
function tableSearch() {
  var phrase = document.getElementById("myInput");
  var table = document.getElementById("myTable");
  var regPhrase = new RegExp(phrase.value, "i");
  var flag = false;
  for (var i = 1; i < table.rows.length; i++) {
    flag = false;
    for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
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

function sortTable(colNum, type) {
  let tbody = table.querySelector("tbody");
  let rowsArray = Array.from(tbody.rows);
  let compare;
  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}
