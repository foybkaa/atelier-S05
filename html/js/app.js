var app = {
  init: function() {
    console.log('app init');
    $('.owl-carousel').owlCarousel({
      loop:true,
      items:1,
      // nav: true,
  });
  },
};


document.addEventListener('DOMContentLoaded', app.init);