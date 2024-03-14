//toggle-MenuButton
var navToggler = document.getElementById("nav-toggle");
var mainMenu = document.getElementById("main-menu");
navToggler.addEventListener("click", ()=>{
  navToggler.classList.toggle("active");
  mainMenu.classList.toggle("active");
})

// Initialize wow.js
new WOW().init();

// Owl Carousel Slider
$(".slider1").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});


//counterup dynamic if you want====
// $('.counterup').counterUp({
//   delay: 10,
//   time: 1000
// });