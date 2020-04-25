$(document).ready(function () {
  // scrollreveal effect
  //landing page scroll
  window.sr = ScrollReveal();
  sr.reveal('h1, h2', {
    duration: 2000,
    origin: 'left',
    distance: '20px'
  });
  sr.reveal('.btn', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px'
  });
  sr.reveal('.right img', {
    duration: 2000,
    origin: 'right',
    distance: '80px'
  });
  //about scroll
  sr.reveal('.about img', {
    duration: 2000,
    origin: 'top',
    distance: '50px',
    viewFactor: .5
  });
  sr.reveal('#contact-img', {
    duration: 1000,
    origin: 'top',
    distance: '10px',
  });
  sr.reveal('.contact-info', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px',
  });
 
  sr.reveal('.showcase-main', {
    duration: 3000,
    origin: 'bottom',
    distance: '30px',
    
  });
  
  sr.reveal('.card', {
    duration: 1000,
    origin: 'bottom',
    distance: '10px',
  });
  


})
