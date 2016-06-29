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
        "Pizza": 8.95,
        "Split Bill":0
    };

    return function(item) {
        return prices[item];
    };
}());


var totalPrice = (function() {
    var total = 0;
    return function(price) {
        total = total + price;
        return parseFloat(total).toFixed(2);
    };
}());


$(".menu").click(function() {
    $('#nosale').text('Current Sale');

    if ($(this).text()) {
        $('.charge').text('Charge $' + totalPrice(menuPrices($(this).text())) + " ");
        $('.items').append('<p><h4 class="item-name">' + $(this).text() + '</h4>' + '<span class="item-price">$ ' 
            + menuPrices($(this).text()) + '</span></p>');
    }
});

$("#split").click(function() {
    if ($(this).text()) {
        console.log('clicked split');
        $('.charge').text('Charge $' + totalPrice(menuPrices($(this).text())) * 0 + " " );
    }
});

// $("#remove").click(function() {
//     if ($(this).text()) {
//         console.log('removed');
//         $('#nosale').text('No Sale');
//     $('.sale').css('background','#ff5959');
//         $( ".items" ).empty();
//         $('.charge').text('Charge $' + totalPrice(menuPrices($(this).text())) * 0 + " " );
//         // $('.items').append('<p><h4 class="item-name">' + $(this).text() + '</h4>' + '<span class="item-price">$ ' 
//         //     + menuPrices($(this).text()) + '</span></p>');
//     }
// });


//remove dinner items from items div
	$("#remove" ).click(function() {
  	$( ".items" ).empty();
  
  	$('#nosale').text('No Sale');
    $('.sale').css('background','#ff5959');
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
    $('.sale').css('background','#00cc00');
    $('#nosale').css('color','white');

});
//click on drop down arrow
    $('.dropdown').click(function() {
        $('.dropdown-content').show();
});

$('.charge').click(function() {
    $('.column1').fadeOut();
    $('.column2').fadeOut();
    $('.column4').fadeOut();
});

