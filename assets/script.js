// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
 
    // Add an event listener for the click event of the element with id 'hamburger'
    document.getElementById('hamburger').addEventListener('click', function() {
        
        // Toggle the 'active' class of the element with id 'nav-menu'
        document.getElementById('nav-menu').classList.toggle('active');
        
    });
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

// Fade in animation
let scrollStartTime;
const fadeInFromTopElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  const scrollTop = window.pageYOffset;

  if (!scrollStartTime) {
    scrollStartTime = Date.now();
  }

  const timeSinceScrollStart = Date.now() - scrollStartTime;

  fadeInFromTopElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = scrollTop > elementTop - window.innerHeight / 2;

    if (elementVisible) {
      const delay = timeSinceScrollStart >= 100 ? 500 :
                     timeSinceScrollStart >= 1000 ? 1000 : 500;
      setTimeout(() => {
        element.classList.add('visible');
      }, delay);
    }
  });
}

handleScroll();

window.addEventListener('scroll', handleScroll);

// reset scrollStartTime when scrolling stops
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollStartTime = null; // reset scroll start time
  }, 100);
});