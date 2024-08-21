// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // Active section for animation on scroll
      sec.classList.add('show-animate');
    } else {
      // If want to use animation that repeats on scroll
      sec.classList.remove('show-animate');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
// Added script
function toggleContent() {
  var dots = document.querySelector('.dots');
  var moreContent = document.querySelector('.more-content');
  var readMore = document.querySelector('.read-more');

  if (moreContent.style.display === 'none') {
      moreContent.style.display = 'inline';
      dots.style.display = 'none';
      readMore.innerText = 'Read less';
  } else {
      moreContent.style.display = 'none';
      dots.style.display = 'inline';
      readMore.innerText = 'Read more';
  }
}

// Initialize the content display
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.more-content').style.display = 'none';
});






  
  // Change header background when navbar is active
  if (navbar.classList.contains('active')) {
    header.classList.add('navbar-active');
  } else {
    header.classList.remove('navbar-active');
  }








  // Debounce function to limit the rate at which the scroll event listener is called
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.onscroll = debounce(() => {
  // your scroll handling code
}, 20);
