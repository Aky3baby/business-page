document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
document.querySelector('.dropbtn').addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});// Progress bar animation
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgress = (bar) => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth + '%';
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});

AOS.init({
  duration: 1000,
  once: true
});