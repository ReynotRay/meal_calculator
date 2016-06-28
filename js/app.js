

var prices = {
	hamburger:['6.95'],
	hotdog:['2.95'],
	chickenburger:['5.95'],
	veggie:['4.95'],
	cheeseburger:['6.95'],
	bratwurst:['1.95'],
	fries:['1.95'],
	clubwrap:['2.95'],
	baconburger:['3.95'],
	chilidog:['3.95'],
	turkeysandwich:['9.95'],
	pizza:['8.00']
};


//when user clicks on item it will add it to items list
$(".menu").click(function() {
   $('#order').append($(this).text()); 
    $('#order').append('<br>');
   checkItems();
});

function checkItems () {
	console.log('before');
	var order = $('#order').text();
	console.log(order);

if (order === "Hamburger"){
	console.log("maybe");
	// $('#order').append(prices{hamburger:['']});
}
else {console.log('nope');
}
}

ls

//remove dinner items from items div
$( "#remove" ).click(function() {
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



