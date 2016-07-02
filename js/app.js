'use strict'

    var charge = $('.charge');
    var nosale = $('#nosale');
    var dropDown = $('.dropdown');
    var split = $("#split");
    var subSplit = $("#sub-split");
    var saleArea= $('.sale-area');
    var dropDownContent = $('.dropdown-content');
    var tip = $('.tip');
    var back = $('#back');
    var thumbnails = $('.thumbnails');


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
        };
        return function(item) {
            return prices[item];
        };
    }());
    //establish images variable
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
    //function loop to generate thumbnails
    function generateItems() {
        for (var i = 0; i < images.length; i++) {
            $('.thumbnails').append('<li><img src="assets/' + images[i] +  ext + '"><div class ="caption">' + categories[i] + '</span></li>');
        }
    }
  generateItems();
    //append dynamically input text for split bill
    subSplit.append('<input type="text" id="split-display" placeholder="How Many?">');
    //establihs variables to obtain total price with tax 
    

    var totalPrice = (function() {
        var total = 0;
        var taxed = .0825;
          var tip = .2;

        return function(price) {
            var subtotal = price * taxed;
            var subtotal1= price * tip;
            total = total + price + subtotal + subtotal1; 
            return parseFloat(total).toFixed(2);
        };
    }());
    //when thumnnails are clicked     
    $(".thumbnails li").click(function() {
    nosale.text('Current Sale');
        if ($(this).text()) {
            charge.text('Charge $' + totalPrice(menuPrices($(this)
                .text())) + " ");
            $('.items').append('<p class="item-name">' + $(this).text() +
                '<span class="item-price">$' + menuPrices($(this).text())
            );
        }
    });

    //remove dinner items from items div
    $("#remove").click(function() {
        charge.text('Charge $' + (totalPrice(menuPrices) * 0));
        $(".items").empty();
        nosale.text('No Sale');
        saleArea.css('background', '#ff5959');
    });
    //when mouse enter arrow display items
    dropDown.mouseenter(function() {
        dropDownContent.fadeIn();
    });
    //leave dropdown to close content
    dropDown.mouseleave(function() {
        $('.dropdown-content').fadeOut();
    });
    //when there is input of item display Current sale
    $('.thumbnails li').click(function() {
        nosale.text('Current Sale');
        saleArea.css('background', '#00cc00');
        nosale.css('color', 'white');
    });
    //click on drop down arrow
    dropDown.click(function() {
        $('.dropdown-content').show();
    });
    //when you click on charge thumbnails disappear
    charge.click(function() {
        thumbnails.hide();
        saleArea.css('width', '855px');
        back.css('display', 'block');
    });
    //click on back will retreat to main screen
    back.click(function() {
        thumbnails.fadeIn();
        saleArea.css('width', '319px');
        });
    //when mouse enters split bill question of how many will pop up
    split.mouseenter(function() {
        subSplit.show();
        });
    //click on clear items and will reload page
    $('#start-over').click(function() {
        location.reload();
        });



    //function to split bill
    function divideBetweenMembers(number) {
        return totalPrice(0) / number;
            }
            //work on function for with parameter selector, mathValue
        // function calc(selector, mathValue){
        //     $(selector).text('$' + " " + (Math.round((mathValue)*100)/100) + " " + 'per person');
        //     }

    $('#split-display').keydown(function(e) {
        if (e.which === 13) {
            console.log(Math.round(divideBetweenMembers($(this).val())*100)/100);
            charge.text('$' + " " + (Math.round(divideBetweenMembers($(this).val())*100)/100) + " " + 'per person');
        }
    });
    //function add tax
    function addTax() {
        return totalPrice(0) * .0825;
    }
    thumbnails.click(function() {
        console.log(Math.round(addTax($(this).val())*100)/100);
        $('.tax').text('tax' + ' ' + '$' + (Math.round(addTax($(this).val())*100)/100));
    });
    //function to add tip
    function addTip() {
        return totalPrice(0) * .15;
    }
    thumbnails.click(function() {
        console.log(Math.round(addTip($(this).val())*100)/100);
        tip.text('gratuity 15% ' + ' ' + '$' + (Math.round(addTip($(this).val())*100)/100));
    });





