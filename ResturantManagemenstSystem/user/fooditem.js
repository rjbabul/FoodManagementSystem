
 
fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Process the data here
     
    var objects = data;


  // Get table body element
  var tableBody = document.querySelector('#object-table tbody');

  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];

    var row = document.createElement('tr');

    // Create table cells and populate data
    var nameCell = document.createElement('td');
    nameCell.textContent = object.foodname;

    categoryCell = document.createElement('td');
    categoryCell.textContent = object.category;

    var cMdateCell = document.createElement('td');
    cMdateCell.textContent = object.manufacture_date;

    var exdateCell = document.createElement('td');
    exdateCell.textContent = object.expiration_date;

    var resCell = document.createElement('td');
    resCell.textContent = object.restaurant;

    var priceCell = document.createElement('td');
    priceCell.textContent = object.price;

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(categoryCell);
    row.appendChild(cMdateCell);
    row.appendChild(exdateCell);
    row.appendChild(resCell);
    row.appendChild(priceCell);

    // Append row to the table body
    tableBody.appendChild(row);

   
   
}
  })
  .catch(function(error) {
    console.log('Error:', error);
  });


