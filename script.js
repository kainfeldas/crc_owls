document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.5 });
  
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  
    // Navbar shrink on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
      } else {
        navbar.classList.remove('navbar-shrink');
      }
    });
  
    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
  });
