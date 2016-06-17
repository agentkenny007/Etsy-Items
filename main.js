var $ = function(sel){ return document.querySelector(sel); };

// ================
// QUESTION 1: Show me how to calculate the average price of all items.
// ================
// Declare a variable 'total'; for each item 'i' in 'items' add the items price to total
var total = 0;
items.forEach(function(i){ total += i.price; });
var average = total / items.length, // use 'total' and the number of items to find the average
    ans1 = "The average price is $" + average.toFixed(2) + ".";
$('#answer1').innerHTML = ans1;


// ================
// QUESTION 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
// ================
// Filter items that have a price between 14 and 18 and currency of USD into an array named 'filteredItems'
var filteredItems = items.filter(function(i){ return i.price >= 14 && i.price <= 18 && i.currency_code == 'USD'; });
filteredItems.forEach(function(i){ // for each filtered item 'i'
    var itemName = document.createElement("p"); // create a node on the page with a tagname <p> and store it as a varialbe called 'itemName'
    itemName.textContent = i.title; // add the name of the filtered item inside the <p> tag 'itemName'
    $('#answer2').appendChild(itemName); // add the <p> tag 'itemName' to the page beneath Answer 2
});


// ================
// QUESTION 3: Which item has a "GBP" currency code? Display it's name and price.
// ================
// Filter items with a property 'currency_code' of "GBP" into an array called 'priceInPounds'
var priceInPounds = items.filter(function(i){ return i.currency_code == 'GBP'; });
$('#answer3').innerHTML = priceInPounds[0].title; // add the title property of the first object in 'priceInPounds' beneath Answer 3


// ================
// QUESTION 4: Display a list of all items who are made of wood.
// ================
// Filter items with a property 'materials' that contains a value called "wood" into an array called 'woodenItems'
var woodenItems = items.filter(function(i){ return i.materials.includes('wood'); });
woodenItems.forEach(function(i){ // for each wooden item 'i'
    var itemName = document.createElement("p"); // create a node on the page with a tagname <p> and store it as a varialbe called 'itemName'
    itemName.textContent = "\"" + i.title + '\" is made of wood.'; // add the name of the wooden item inside the <p> tag 'itemName'
    $('#answer4').appendChild(itemName); // add the <p> tag 'itemName' to the page beneath Answer 2
});


// ================
// QUESTION 5: Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// ================
// Filter items with a property 'materials' that contains 8 or more things into an array called 'fancyItems'
var fancyItems = items.filter(function(i){ return i.materials.length >= 8; });
fancyItems.forEach(function(i){ // for each fancy item 'i'
    var fancyItem = document.createElement("p"); // create a node on the page with a tagname <p> and store it as a varialbe called 'fancyItem'
    var fancyItemMaterials = document.createElement("ol"); // create a node on the page (an ordered list) to list the materials of 'fancyItem'
    fancyItem.textContent = i.title; // add the name of the fancy item inside the <p> tag 'fancyItem'
    i.materials.forEach(function(m){ // for each property 'materials' 'm' of the fancy item 'i'
        var material = document.createElement("li"); // create a list item and store it as a variable called 'material'
        material.textContent = m; // add the material 'm' inside the list item
        fancyItemMaterials.appendChild(material); // add the material to the ordered list 'fancyItemMaterials'
    });
    fancyItem.appendChild(fancyItemMaterials); // add the ordered list 'fancyItemMaterials' to the <p> tag 'fancyItem'
    $('#answer5').appendChild(fancyItem); // add the <p> tag 'fancyItem' to the page beneath Answer 5
});


// ================
// QUESTION 6: How many items were made by their sellers?
// ================
// Filter items with a property 'who_made' with a value of "i_did" into an array called 'sellerMadeItems'
var sellerMadeItems = items.filter(function(i){ return i.who_made == 'i_did'; });
$('#answer6').innerHTML = sellerMadeItems.length + " items were made by their sellers."; // add a string with the length of items in the array 'sellerMadeItems' beneath Answer 6
