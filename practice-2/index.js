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
