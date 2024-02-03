//counterup dynamic if you want====

// $('.counterup').counterUp({
//   delay: 10,
//   time: 1000
// });

// Slider Number1
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

// Accourdion items js

function toggleAccordionItem(itemNumber) {
  const items = document.querySelectorAll('.accordion-item-content');
  items.forEach((item, index) => {
    if (index + 1 === itemNumber) {
      item.classList.toggle('active');
    } else {
      item.classList.remove('active');
    }
  });
}