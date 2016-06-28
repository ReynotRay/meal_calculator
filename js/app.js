

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



$(".menu").click(function() {

//var Hamburger = ('7.00');

   $('.items p').append($(this).text()); 
    $('.items p').append('<br>');
   console.log(this.text);
   checkItems();
});

function checkItems () {
	console.log('before');
	var string = document.getElementById('#order').value;
	alert(string);
// 	if(document.getElementById("p"). === "Hamburger"){
// 	console.log('almost');
// }
// else {
// 	console.log('error');
// }

}
// var t = document.getElementById('superman').value;
// alert(t); }
//     if ('.items'.value == 'Hamburger'){
//     		console.log('somewhat');
//     	}
//     	else{
//     		console.log('error');
//     	}
//     $('.items p').append('<br>');
// console.log('.items p'.value);
// });

// if ('items p'.value === "hamburger"){
// console.log('699');
//}

// $('.menu').click(function(){
// 	console.log('clicks');
//     var values = $('.items p').val().split(' ');
//     values.push($(this).html());
//     $('.items p').val(values.join(' '));
//     return false;
// });
