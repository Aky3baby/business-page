


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav ul');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
  });

  // Toggle dropdown on mobile
  dropdownToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
          e.preventDefault();
          this.parentElement.classList.toggle('active');
      }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          !e.target.closest('nav') && 
          !e.target.closest('.hamburger')) {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
      }
  });

  // Close menu on link click
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
              hamburger.classList.remove('active');
              nav.classList.remove('active');
          }
      });
  });
});