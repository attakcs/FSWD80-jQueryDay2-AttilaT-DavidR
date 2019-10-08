var data = JSON.parse(grocery);

// Start of JQuery Code
$("document").ready(function() {

  //CREATE BUTTONS
  for (let i = 0; i < data.length; i++) {
    $("#btns").append(`<input type="button" value="${data[i].name}">`);
  }
  $("input[type=button]").addClass("buttons");
  $("#btns").append(` <input type="button" value="Reset" id="reset">`); // reset button
  $("#btns").append(`<br>`);

  //add eventlisteners for buttons
  var buttons = document.getElementsByClassName('buttons');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', addToCart);
  }
  document.getElementById('reset').addEventListener('click', reset);

  //"this" gets passed as argument by eventListener
  function addToCart() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == this.value) {
        data[i].quantity++;
      }
    }
    update();
  }

  //empty the cart
  function reset() {
  	for (let i = 0; i < data.length; i++) {
  		data[i].quantity = 0;
  	}
  	update();
  }

  //UPDATE THE HTML AND SUM
  function update() {
  	var sum = 0;
  	$("#cart").html("<h2>Shopping Cart</h2>");
    for (let i = 0; i < data.length; i++) {
    	if (data[i].quantity > 0) { //if item is in cart...
		    $("#cart").append(`<div class="item">Name: ${data[i].name} | Price: ${data[i].price}€ <img src=${data[i].image}><br>
		    	Quantity: ${data[i].quantity}<hr></div>`);
		    sum+= data[i].price*data[i].quantity;
    	}
    }
    $("#cart").append(`<hr>${Math.round(sum*100)/100} €`);
  }

});
// End of JQuery Code