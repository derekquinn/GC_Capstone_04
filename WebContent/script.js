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
	priceCart.push(cost);
	var cartEl = document.getElementById("cartplace");
	cartEl.insertAdjacentHTML("afterend", "<tr><td>" + beer + "</td><td>"
			+ brewery + "</td><td>" + "$" + cost + "</td></tr>");

}

function calcTotals() {
	var grandTotal = 0;
	for (i = 0; i < priceCart.length; i++) {
		grandTotal = grandTotal + priceCart[i];
	}
	var totalEl = document.getElementById("cart");
	totalEl.textContent = ("$" + Number(grandTotal).toFixed(2));
	var taxesEl = document.getElementById("cartTax");
	taxesEl.textContent = ("$" + Number(grandTotal * 0.06).toFixed(2));
	var grandTotalEl = document.getElementById("cartTotal");
	grandTotalEl.textContent = ("$" + Number(grandTotal * 1.06).toFixed(2));

}

function generateList() {
	for (i = 0; i<breweries.length; i++) {

		var listEl = document.getElementById("listplace");
		listEl.insertAdjacentHTML("afterend", "<tr><td>" + beers[i] + "</td><td>"
				+ breweries[i] + "</td><td>" + "$" + prices[i] + "</td></tr>" + "") 			
				
				//<td><button onclick="addItem('Two Hearted','Bells', 8.75)">ADD</button></td>;

	}
}
// REMOVE ME DEBUG

// console.log(beerCart);
// console.log(breweries);
// console.log(prices);
