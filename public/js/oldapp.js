var MenuCalculator = (function() {
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
    };
    return function(item) {
        return prices[item];
    };
}());
var totalPrice = (function() {
    var total = 0;
    return function(price) {
        taxed = .0825;
        tip = .2;
        subtotal = price * taxed;
        subtotal1= price * tip;
        total = total + price + subtotal + subtotal1; 
        return parseFloat(total).toFixed(2);
    };
}());


//function loop to generate thumbnails
MenuCalculator.prototype.generateMenu = function(event) {
    //establish images variables
    var images = ['hamburger', 'hotdog', 'chickenburger', 'veggie',
    'cheeseburger', 'bratwurst', 'fries', 'clubwrap', 'bacon-burger',
    'chilidog', 'turkeysandwich', 'pizza'
    ];
//establist var ext for jpeg image & categories for loop
    var ext = '.jpeg';
    var categories = ["Hamburger", "Hot Dog", "Chicken Burger",
    "Veggie Sandwich", "Cheeseburger", "Bratwurst", "Fries",
    "Club Wrap", "Bacon Burger", "Chili Dog", "Turkey Sandwich",
    "Pizza"
    ];
    for (var i = 0; i < images.length; i++) {
        $('.thumbnails').append('<li><img src="assets/' + images[i] +  ext + '"><div class ="caption">' + categories[i] + '</span></li>');
    }
    menuCalculator.chargeItem();
}



//when thumbnails are clicked 
MenuCalculator.prototype.chargeItem = function() {
    $(".thumbnails li").click(function() {
    $('#nosale').text('Current Sale');
    if ($(this).text()) {
        $('.charge').text('Charge $' + totalPrice(MenuCalculator($(this)
            .text())) + " ");
        $('.items').append('<p class="item-name">' + $(this).text() +
            '<span class="item-price">$' + MenuCalculator($(this).text())
        );
    }
    });
    menuCalculator.addTax();
    //menuCalculator.divideBetweenMembers();
}

//function to split bill
MenuCalculator.prototype.divideBetweenMembers = function(number) {
    return totalPrice(0) / number;
        }
$('#split-display').keydown(function(e) {
    console.log('cooool');
    if (e.which === 13) {
        console.log(Math.round(divideBetweenMembers($(this).val())*100)/100);
        $('.charge').text('$' + " " + (Math.round(divideBetweenMembers($(this).val())*100)/100) + " " + 'per person');
    };
});

//function add tax
MenuCalculator.prototype.addTax = function(number) {
    console.log('insidetax');
    return totalPrice(0) * .0825;
}
$('.thumbnails').click(function() {
    console.log(Math.round(addTax($(this).val())*100)/100);
    $('.tax').text('tax' + ' ' + '$' + (Math.round(addTax($(this).val())*100)/100));
});
//function to add tip
function addTip() {
    return totalPrice(0) * .15;
}
//additem
MenuCalculator.prototype.addItem = function() {
$('.thumbnails').click(function() {
    console.log(Math.round(addTip($(this).val())*100)/100);
    $('.tip').text('gratuity 15% ' + ' ' + '$' + (Math.round(addTip($(this).val())*100)/100));
});
}

MenuCalculator.prototype.splitBill = function (event){
//append dynamically input text for split bill
console.log('split');
$(".split1").append('<input type="text" id="split-display" placeholder="How Many?">');
//establihs variables to obtain total price with tax 

}



var menuCalculator = new MenuCalculator();
menuCalculator.generateMenu();


//when mouse enter arrow display items
$(".dropdown").mouseenter(function() {
    $('.dropdown-content').fadeIn();
});
//leave dropdown to close content
$(".dropdown").mouseleave(function() {
    $('.dropdown-content').fadeOut();
});
//when there is input of item display Current sale
$('.thumbnails li').click(function() {
    $('#nosale').text('Current Sale');
    $('.sale-area').css('background', '#00cc00');
    $('#nosale').css('color', 'white');
});
//click on drop down arrow
$('.dropdown').click(function() {
    $('.dropdown-content').show();
});
//when you click on charge thumbnails disappear
$('.charge').click(function() {
    $('.thumbnails').hide();
    $('.sale-area').css('width', '855px');
    $('#back').css('display', 'block');
});
//click on back will retreat to main screen
$('#back').click(function() {
    $('.thumbnails').fadeIn();
    $('.sale-area').css('width', '319px');
});
//when mouse enters split bill question of how many will pop up
$('#split').mouseenter(function() {
    $(".split1").show();
});
//click on clear items and will reload page
$('#start-over').click(function() {
    location.reload();
});

//remove dinner items from items div
$("#remove").click(function() {
    $('.charge').text('Charge $' + (totalPrice(MenuCalculator) * 0));
    $(".items").empty();
    $('#nosale').text('No Sale');
    $('.sale-area').css('background', '#ff5959');
});