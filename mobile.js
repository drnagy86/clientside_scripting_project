var numCupcakes1 = 0.00;
var numCupcakes2 = 0.00;
var numCupcakes3 = 0.00;
var numCupcakes4 = 0.00;
var numCupcakes5 = 0.00;
var numCupcakes6 = 0.00;
var numCupcakes7 = 0.00;
var price = 2.00;
var tax = 0.00;
var taxRate = 0.06;
var balanceDue = 0.00;


//var orderNumber = ("order" + counter);

$("document").ready(function () {

    // when the add cupcakes popup is closed

    // 1. it needs to take the type of cupcake and quantity
    // 2. add to a running total on the footer
    // 3. do some fun animation where it looks like it is putting it in the cart?

    $("#addCupCakesPop1").popup({
        afterclose: function () {
            // get the value
            numCupcakes1 = $("#countOfCurrentSelect1").val();
            // put it in the list
            $("#ui-li-count1").text(numCupcakes1);
            //update cart
            getTotals();
        }
    }); //end addCupCakesPop1

    $("#addCupCakesPop2").popup({
        afterclose: function () {
            numCupcakes2 = $("#countOfCurrentSelect2").val();
            $("#ui-li-count2").text(numCupcakes2);
            getTotals();
        }
    }); //end addCupCakesPop2

    $("#addCupCakesPop3").popup({
        afterclose: function () {
            numCupcakes3 = $("#countOfCurrentSelect3").val();
            $("#ui-li-count3").text(numCupcakes3);
            getTotals();
        }

    }); //end addCupCakesPop3

    $("#addCupCakesPop4").popup({
        afterclose: function () {
            // get the value
            numCupcakes4 = $("#countOfCurrentSelect4").val();
            // put it in the list
            $("#ui-li-count4").text(numCupcakes4);
            //update cart
            getTotals();
        }
    }); //end addCupCakesPop4

    $("#addCupCakesPop5").popup({
        afterclose: function () {
            // get the value
            numCupcakes5 = $("#countOfCurrentSelect5").val();
            // put it in the list
            $("#ui-li-count5").text(numCupcakes5);
            //update cart
            getTotals();
        }
    }); //end addCupCakesPop5

    $("#addCupCakesPop6").popup({
        afterclose: function () {
            // get the value
            numCupcakes6 = $("#countOfCurrentSelect6").val();
            // put it in the list
            $("#ui-li-count6").text(numCupcakes6);
            //update cart
            getTotals();
        }
    }); //end addCupCakesPop6

    $("#addCupCakesPop7").popup({
        afterclose: function () {
            // get the value
            numCupcakes7 = $("#countOfCurrentSelect7").val();
            // put it in the list
            $("#ui-li-count7").text(numCupcakes7);
            //update cart
            getTotals();
        }
    }); //end addCupCakesPop7



    // make sure all the input has the jQuery Mobile theme
    $("input").textinput();

    // validate for personal
    $("#personal").validate({
        rules: {
            firstLastName: {
                required: true
            },
            car: {
                required: true
            },
            phoneNum: {
                required: true,
                minlength: 14,
                maxlength: 14
            }

        }, //end rules 
        //validation messages
        messages: {
            firstLastName: "Please enter your name.",
            car: "Which spot?",
            phoneNum: "Please enter a phone number."
        } //end messages
    }); //end validate for personal

    // page 2 validation
    $("#nextPage2").click(function (event) {
        //prevent from moving on
        event.preventDefault();

        if ($("#personal").valid()) {
            // go to page 3
            location.hash = "page3";
        } else {
            //stay on the page
            location.hash = "page2";
        }
    });

    //start mask
    $("#phoneNum").mask('(000)-000-0000', {
        placeholder: "(319)-000-1234"
    });

}); //end doc ready


function getTotals() {
    numCupcakes1 = Number(numCupcakes1);
    numCupcakes2 = Number(numCupcakes2);
    numCupcakes3 = Number(numCupcakes3);
    numCupcakes4 = Number(numCupcakes4);
    numCupcakes5 = Number(numCupcakes5);
    numCupcakes6 = Number(numCupcakes6);
    numCupcakes7 = Number(numCupcakes7);

    //do some calculating
    totalCart = (numCupcakes1 + numCupcakes2 + numCupcakes3 + numCupcakes4 + numCupcakes5 + numCupcakes6 + numCupcakes7) * price;

    // add to the cart
    $(".shoppingCartIcon").text("$" + totalCart.toFixed(2));
    $("#totalCostCupcakes").text("$" + totalCart.toFixed(2));

    //calculate taxes and put in container
    tax = +totalCart * +taxRate;
    $("#tax").text("$" + tax.toFixed(2));

    //add taxes
    // Probably needs some rounding, but I don't know how sales tax works...
    balanceDue = +totalCart + +tax;
    $("#balanceDue").text("$" + balanceDue.toFixed(2));
}
