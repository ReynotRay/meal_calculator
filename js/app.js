    
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
    var images = ['hamburger', 'hotdog', 'chickenburger', 'veggie',
        'cheeseburger', 'bratwurst', 'fries', 'clubwrap', 'bacon-burger',
        'chilidog', 'turkeysandwich', 'pizza'
    ];
    var ext = '.jpeg';
    var categories = ["Hamburger", "Hot Dog", "Chicken Burger",
        "Veggie Sandwich", "Cheeseburger", "Bratwurst", "Fries",
        "Club Wrap", "Bacon Burger", "Chili Dog", "Turkey Sandwich",
        "Pizza"
    ];

    function generateItems() {
        for (var i = 0; i < images.length; i++) {
            $('.thumbnails').append('<li><img src="assets/' + images[i] +  ext + '"><div class ="caption">' + categories[i] + '</span></li>');
        }
    }
    generateItems();
    console.log('fucks');
    var totalPrice = (function() {
        var total = 0;
        return function(price) {
            taxed = .0825;
            subtotal = price * taxed;
            total = total + price + subtotal; 
            return parseFloat(total).toFixed(2);
        };
    }());
    $(".thumbnails li").click(function() {
        $('#nosale').text('Current Sale');
        console.log("click");
        if ($(this).text()) {
            $('.charge').text('Charge $' + totalPrice(menuPrices($(this)
                .text())) + " ");
            $('.items').append('<p class="item-name">' + $(this).text() +
                '<span class="item-price">$' + menuPrices($(this).text())
            );
        }
    });
    //remove dinner items from items div
    $("#remove").click(function() {
        $('.charge').text('Charge $' + (totalPrice(menuPrices) * 0));
        $(".items").empty();
        $('#nosale').text('No Sale');
        $('.sale-area').css('background', '#ff5959');
    });
    //when mouse enter arrow display items
    $(".dropdown").mouseenter(function() {
        $('.dropdown-content').fadeIn();
    });
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
    $('.takeaway').click(function() {
        console.log('click');
        $('.item-price').hide();
        $('.item-name').hide();
    });
    $(".charge").one('click', function() {
        $('.thumbnails').hide();
        $('.sale-area').css('width', '855px');
        $('#back').css('display', 'block');
    });
    $('.charge').click(function() {
        $('.thumbnails').hide();
        $('.sale-area').css('width', '855px');
        $('#back').css('display', 'block');
    });
    $('#back').click(function() {
        $('.thumbnails').fadeIn();
        $('.sale-area').css('width', '319px');
    });
    $('#split').mouseenter(function() {
        $(".split1").show();
    });
    $('#start-over').click(function() {
        location.reload();
    });
    $(".split1").append(
        '<input type="text" id="split-display" placeholder="How Many?">');

    function divideBetweenMembers(number) {
        return totalPrice(0) / number;
        // return parseFloat(total).toFixed(2);
            }
    $('#split-display').keydown(function(e) {
        console.log('cooool');
        if (e.which === 13) {
            console.log(Math.round(divideBetweenMembers($(this).val())*100)/100);
            $('.charge').text('$' + " " + (Math.round(divideBetweenMembers($(this).val())*100)/100) + " " + 'per person');
        }
    });

    function addTax() {
        return totalPrice(0) * .0825;
        return 
    }
    $('.thumbnails').click(function() {
        console.log(Math.round(addTax($(this).val())*100)/100);
        $('.tax').text('tax' + ' ' + '$' + (Math.round(addTax($(this).val())*100)/100));
    });







