// Almeida Júnior Page JavaScript
// Smooth scroll and animations

document.addEventListener('DOMContentLoaded', function() {
  
  // Enhanced scroll animation observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll('.porque-card, .estrutura-card, .mv-item, .estado-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Observe historia text elements for animation
  const historiaTexts = document.querySelectorAll('.historia-text');
  const historiaObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });
  
  historiaTexts.forEach(text => {
    historiaObserver.observe(text);
  });

  // Animate section titles
  const sectionTitles = document.querySelectorAll('.historia-title, .porque-title, .estrutura-title, .alcance-title, .valores-header, .mv-content h2, .quote-section');
  sectionTitles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(40px)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(title);
  });

  // Animate quote section
  const quoteSection = document.querySelector('.quote-section');
  if (quoteSection) {
    const quoteObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.3
    });
    
    quoteObserver.observe(quoteSection);
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
  });

  // Mapa Brasil - Interactive states (if SVG is available)
  const mapaBrasil = document.getElementById('mapaBrasil');
  if (mapaBrasil && mapaBrasil.contentDocument) {
    const svgDoc = mapaBrasil.contentDocument;
    const estados = ['SP', 'MG', 'PR', 'RS', 'GO', 'MT', 'MA', 'BA'];
    
    estados.forEach(estado => {
      const path = svgDoc.getElementById(estado);
      if (path) {
        path.style.cursor = 'pointer';
        path.addEventListener('mouseenter', function() {
          this.style.fill = '#ffa500';
        });
        path.addEventListener('mouseleave', function() {
          this.style.fill = '#2c5aa0';
        });
      }
    });
  }

  // Counter animation for statistics (if needed in future)
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = hero.querySelector('.bg-image');
      if (parallax && scrolled < hero.offsetHeight) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

});
