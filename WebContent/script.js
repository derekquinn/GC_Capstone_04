// parallel arrays to hold the relevant data
var beers = [ "Two Hearted", "Fresh Squeezed", "Commodore Perry", "Stone IPA",
		"Imperial Crème Brûlée", "Lime-a-rita" ];
var breweries = [ "Bell's", "Deschutes", "Great Lakes", "Stone", "Kuhnhenn",
		"Bud Light" ];
var prices = [ 8.00, 7.50, 6.50, 6.20, 8.50, 3.00 ];

// empty parallel arrays for shopping cart data
var beerCart = [];
var breweryCart = [];
var priceCart = [];

// function(s) for adding items to cart array when clicked
function addItem(beer, brewery, cost) {
	
	beerCart.push(beer);
	breweryCart.push(brewery);
	priceCart.push(price);

}





// REMOVE ME DEBUG

//console.log(beerCart);
//console.log(breweries);
//console.log(prices);