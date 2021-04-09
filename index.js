let currentSlide = 0; //counter for slides
let heroImgContainer = document.querySelectorAll('.hero-img'); // images for hero slideshow
let heroTextContainer = document.querySelectorAll('.hero-text'); // descriptions for each hero slide
let navControl = document.querySelectorAll('.nav-menu-icon'); //icon control for mobile nav
let displayMobileNav = false; // display mobile navigation menu boolean

//if current slide is last slide then start back from beginning
function incramentSlide() {
  currentSlide < 2 ? currentSlide++ : (currentSlide = 0);
  setActiveSlide();
}

// if slide is 0 then go to last slide in order
function decramentSlide() {
  currentSlide > 0 ? currentSlide-- : (currentSlide = 2);
  setActiveSlide();
}

//sets the active class to next item in slideshow and removes active class from non0active slides
function setActiveSlide() {
  heroImgContainer.forEach((slide) => {
    slide.classList.remove('active');
    heroImgContainer[currentSlide].classList.add('active');
  });

  heroTextContainer.forEach((slide) => {
    slide.classList.remove('active');
    heroTextContainer[currentSlide].classList.add('active');
  });
}

//toggle mobile navbar display when user clicks hamgurger menu / X to close
function toggleMobileNavDisplay() {
  let navbarSelector = document.getElementsByClassName('nav-container');
  let navLogo = document.getElementsByClassName('nav-logo');
  let navLinksContainer = document.getElementsByClassName('nav-link-container');
  let placeholderBurger = document.getElementsByClassName('nav-menu-burger');
  let navOverlay = document.getElementsByClassName('nav-overlay');

  // toggles wehter to display mobile nav options
  displayMobileNav = !displayMobileNav;

  if (displayMobileNav) {
    navLogo[0].classList.add('display-none');
    navbarSelector[0].classList.add('active');
    navControl[1].classList.remove('display-none');
    navControl[0].classList.add('display-none');
    navLinksContainer[0].classList.add('active');
    placeholderBurger[0].classList.add('display-none');
    navOverlay[0].classList.add('active');
  } else {
    navLogo[0].classList.remove('display-none');
    navbarSelector[0].classList.remove('active');
    navControl[1].classList.add('display-none');
    navControl[0].classList.remove('display-none');
    navLinksContainer[0].classList.remove('active');
    placeholderBurger[0].classList.remove('display-none');
    navOverlay[0].classList.remove('active');
  }
}

// after 7 seconds change to next slide for slideshow effect
setTimeout(() => {
  window.setInterval(() => {
    incramentSlide();
  }, 7000);
}, 7000);

//listen for key down events on left and right arrow keys to control slideshow
document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft') {
    decramentSlide();
  } else if (e.key == 'ArrowRight') {
    incramentSlide();
  }
});
