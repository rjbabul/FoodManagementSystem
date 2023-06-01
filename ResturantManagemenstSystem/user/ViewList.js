
 
fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Process the data here
     
    var objects = data;
   
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];

    // Create table cells and populate data
    var nameCell = document.getElementById('foodname');
    nameCell.textContent = object.foodname;

    categoryCell = document.getElementById('category');
    categoryCell.textContent = object.category;

    var cMdateCell = document.getElementById('mdate');
    cMdateCell.textContent = object.manufacture_date;

    var exdateCell = document.getElementById('exdate');
    exdateCell.textContent = object.expiration_date;

    var resCell = document.getElementById('resturant');
    resCell.textContent = object.restaurant;

    var priceCell = document.getElementById('price');
    priceCell.textContent = object.price;
    

    var cardContainer = document.getElementById('card-container');

// Loop through the card data array
 
for(let i =0; i< data.length;i++) {
  // Create the card element
  card= data[i];

  var cardElement = document.createElement('div');
  cardElement.className = 'card';

  // Create the card content
  var cardContent = document.createElement('div');
  cardContent.className = ' Card-content';

  // Create the card title
  var titleElement = document.createElement('b');
  titleElement.textContent =" Food Name  :  "+ card.foodname;
  cardContent.appendChild(titleElement);

 var titleElement = document.createElement('p');
  titleElement.textContent =' ';
  cardContent.appendChild(titleElement);

  var titleElement = document.createElement('p');
  titleElement.textContent =" Category  :  "+ card.category;
  cardContent.appendChild(titleElement);
  
  var titleElement = document.createElement('p');
  titleElement.textContent =" Manufacture Date  :  "+ card.manufacture_date;
  cardContent.appendChild(titleElement);

  var titleElement = document.createElement('p');
  titleElement.textContent =" Expire Date  :  "+ card.expiration_date;
  cardContent.appendChild(titleElement);

  var titleElement = document.createElement('p');
  titleElement.textContent =" Restaurant  :  "+ card.restaurant;
  cardContent.appendChild(titleElement);

  var titleElement = document.createElement('p');
  titleElement.textContent =" Price  :  "+ card.price;
  cardContent.appendChild(titleElement);
   
   
  // Append the card content to the card element
  cardElement.appendChild(cardContent);

  // Append the card element to the card container
  cardContainer.appendChild(cardElement);
}
}
  })
  .catch(function(error) {
    console.log('Error:', error);
  });


