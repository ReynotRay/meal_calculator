

var prices = {
	hamburger:[' $6.95'],
	hotdog:[' $2.95'],
	chickenburger:[' $5.95'],
	veggie:[' $4.95'],
	cheeseburger:[' $7.95'],
	bratwurst:[' $1.95'],
	fries:[' $1.95'],
	clubwrap:[' $2.95'],
	baconburger:[' $3.95'],
	chilidog:[' 3.95'],
	turkeysandwich:[' 9.95'],
	pizza:[' 8.00']
};


//when user clicks on item it will add it to items list
	$(".menu").click(function() {
	//obtain value when clicked then run that value into prices
	var userPick = ['hamburger','hotdog','chickenburger','veggie'];
	var categories = ['hamburger','hotdog','chickenburger','veggie'];
	    $('#order').append($(this).text());
	    console.log($(this).text());
	// checkValue();

	//for (var i = 0;i <= 4; i++){
	
   if (($(this).text())=== "Hamburger"){
   	$('#order').append(prices.hamburger);
   	$('#order').append('<br>');
   }
   if (($(this).text())=== "Hot Dog"){
   	$('#order').append(prices.hotdog);
   	$('#order').append('<br>');
   }
    if (($(this).text())=== "Chickenburger"){
   	$('#order').append(prices.chickenburger);
   	$('#order').append('<br>');
   }
    if (($(this).text())=== "Veggie"){
   	$('#order').append(prices.veggie);
   	$('#order').append('<br>');
   }
    if (($(this).text())=== "Cheeseburger"){
   	$('#order').append(prices.cheeseburger);
   	$('#order').append('<br>');
   }
    if (($(this).text())=== "Bratwurst"){
   	$('#order').append(prices.bratwurst);
   	$('#order').append('<br>');
   }
    if (($(this).text())=== "Fries"){
   	$('#order').append(prices.fries);
   	$('#order').append('<br>');
   }
   if (($(this).text())=== "Bacon Burger"){
   	$('#order').append(prices.baconburger);
   	$('#order').append('<br>');
   }
	else {
		console.log('nope');
   }
});

//remove dinner items from items div
	$("#remove" ).click(function() {
  	$( "#order" ).empty();
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



