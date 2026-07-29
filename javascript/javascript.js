//Initialize Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]'

);

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = '<img class="star-rating" src="' + imgSrc + '" alt="Movie rating">';
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover focus'
    });
});

//Initialize Toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display Toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay')
    );
    toast.show();
}    

function buyTickets(){
    displaySelectedMovieOptions();
}

//JQUERY

//Shrinks header size when docment is scrolle down by 80 pixels
$(document).on("scroll", function() {
    //When the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirment has been met add the
        //nav=shrink class selector to the same HTML element
        //that has the nav vlass
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobiel drop menu
        //to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or
        //is back at the tip the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class slector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now
        //returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//Close mobile menu when a nagivation link is clicked
$(document).ready(function() {
    //On click when and element contains just the nav-link class and not the dropdown-toggle and then
    //also close when an element with the class .dropdown-item(each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //Collapse the navbar when a link dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});