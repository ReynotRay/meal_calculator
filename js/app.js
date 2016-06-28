var menuPrices = (function() {
    var prices = {
        "Hamburger": 6.95,
        "Hot Dog": 2.95,
        "Chicken Burger": 5.95,
        "Veggie Sandwich": 4.95,
        "Cheeseburger": 7.95,
        "Bratwurst": 1.95,
        "Fries": 1.95,
        "Club Wrap": 2.95,
        "Bacon Burger": 3.95,
        "Chili Dog": 3.95,
        "Turkey Sandwich": 9.95,
        "Pizza": 8.00
    };

    return function(item) {
        return prices[item];
    }
}());


var totalPrice = (function() {
    var total = 0;
    return function(price) {
        total = total + price;
        return parseFloat(total).toFixed(2);
    }
}());


$(".menu").click(function() {
    $('#nosale').text('Current Sale');

    if ($(this).text()) {
        $('.charge').text('$' + totalPrice(menuPrices($(this).text())) + " ");
        $('.items').append('<p><h4 class="item-name">' + $(this).text() + '</h4>' + '<span class="item-price">$ ' + menuPrices($(this).text()) + '</span></p>');
    }

});

//remove dinner items from items div
	$("#remove" ).click(function() {
  	$( ".items" ).empty();
    //(totalPrice * 0);
  	$('#nosale').text('No Sale');

});

//when mouse enter arrow display items
	$(".dropdown").mouseenter(function() {
  	$('.dropdown-content').fadeIn();
});

	$(".dropdown").mouseleave(function() {
  	$('.dropdown-content').fadeOut();
});

//when there is input of item display Current sale
	$('.menu').click(function()	{
	$('#nosale').text('Current Sale');

});



