

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

console.log('fucks');
var totalPrice = (function() {
    var total = 0;
    return function(price) {
        total = total + price;
        return parseFloat(total).toFixed(2);
    };
}());

//console.logp(rice);

$(".menu").click(function() {
    $('#nosale').text('Current Sale');

    if ($(this).text()) {
        $('.charge').text('Charge $' + totalPrice(menuPrices($(this).text())) + " ");
        $('.items').append('<p class="item-name">' + $(this).text()+ 
            '<span class="item-price">$'+ menuPrices($(this).text()) + '<div id="takeaway">Xhere');
    }
});

    $("#split").click(function() {
    $('.charge').append('Charge $' + totalPrice(menuPrices($(this).text())));
    $('.charge').text('Charge $' + (totalPrice(menuPrices)/2));
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
	$("#remove").click(function() {
      $('.charge').text('Charge $' + (totalPrice(menuPrices)*0));
  	$( ".items").empty();
  
  	$('#nosale').text('No Sale');
    $('.sale-area').css('background','#ff5959');
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
    $('.sale-area').css('background','#00cc00');
    $('#nosale').css('color','white');

});
//click on drop down arrow
    $('.dropdown').click(function() {
    $('.dropdown-content').show();
});

    $('.takeaway').click(function() {
    console.log('click');
    $('.item-price').hide();
    $('.item-name').hide();
    });

    $(".charge").one('click', function () { 
    $(".charge").append('<input type="text" id="split-display" placeholder="Split Bill?">');  
    $('.column1').hide();
    $('.column2').hide();
    $('.column3').hide();
    $('.sale-area').css('width','855px');
    $('#back').css('display','block');

});
$('.charge').click(function() {
    $('.column1').hide();
    $('.column2').hide();
    $('.column3').hide();
    $('.sale-area').css('width','855px');
    $('#back').css('display','block');
});
$('#back').click(function() {
    $('.column1').fadeIn();
    $('.column2').fadeIn();
    $('.column3').fadeIn();
    $('.sale-area').css('width','319px');
    $('#split-display').hide();
});

$('#start-over').click(function() {
    location.reload();
});


