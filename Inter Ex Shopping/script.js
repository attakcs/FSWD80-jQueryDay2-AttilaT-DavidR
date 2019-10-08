var data = JSON.parse(grocery);

var cart = [];
// Start of JQuery Code
$("document").ready(function(){
	for (let i = 0; i < data.length; i++) {
		$("#products").append(`<div><img src=${data[i].image}><p>${data[i].name}</p><h4>${data[i].price}€</h4>
			<input type="button" value="&#128722;add to cart" name="${i}"></div>`);
	}

	$("#products input").on("click", addToCart);
	
	function addToCart(){
		var i = this.name;
			data[i].quantity++;
			update();
	}

	function update(){
		var html ="";
		var rawsum = 0;
		var discountPct;
		for (let i = 0; i < data.length; i++) {
			if (data[i].quantity > 0) {
				rawsum += data[i].quantity*data[i].price;
				html += `<div><img src=${data[i].image}><div><p>${data[i].name}</p><h5>${data[i].price}€</h5></div>
				<div><input type="number" name=${i} value=${data[i].quantity}><p>${data[i].quantity*data[i].price}€</p></div></div>`
			}
		}
		tax = rawsum*.22;
		shipping = 0;
		discountPct = (rawsum < 40) ? 0 : (rawsum < 100) ? .07 : .12;



		$("#cart").html(html);
	}




});
// End of JQuery Code

/*Shipping info - for items that cost more than 80 Euros, shipping costs 6 Euros, otherwise it costs 9 Euros
Calculate the tax of 22%
Calculate the discount according to the total cost (< 40 Euros = 0%, < 100 = 7%, < 200 = 12%)*/