// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
});

var calendarRange = myApp.calendar({
    input: '#calendar-range',
    dateFormat: 'M dd yyyy',
    rangePicker: true
});
