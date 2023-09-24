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
