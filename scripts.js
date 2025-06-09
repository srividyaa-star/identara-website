// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
  // Navbar blur on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Show/hide Back to Top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
// Smooth scroll to top
backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Parallax effect in Hero
const hero = document.querySelector('.hero');

if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = hero;

    const moveX = (offsetX / offsetWidth) * 10 - 5; 
    const moveY = (offsetY / offsetHeight) * 10 - 5;

    hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
  });
}
// Page Load Fade-in
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s ease';

  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});
// Typing effect for hero heading
document.addEventListener("DOMContentLoaded", function() {
  const heroHeading = document.querySelector('.hero h1');
  if (heroHeading) {
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        heroHeading.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();
  }
});
// Floating glow cursor effect
document.addEventListener("DOMContentLoaded", function() {
  const glow = document.createElement('div');
  glow.style.position = 'fixed';
  glow.style.width = '20px';
  glow.style.height = '20px';
  glow.style.borderRadius = '50%';
  glow.style.background = 'rgba(0, 119, 204, 0.7)';
  glow.style.pointerEvents = 'none';
  glow.style.zIndex = '9999';
  glow.style.transition = 'transform 0.15s ease-out';
  document.body.appendChild(glow);

  document.addEventListener('mousemove', function(e) {
    glow.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  });
});
// 3D tilt effect on journey cards
document.addEventListener("DOMContentLoaded", function() {
  const journeyCards = document.querySelectorAll('.journey-card');

  journeyCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});
// Skill card pop on hover
document.addEventListener("DOMContentLoaded", function() {
  const skillBoxes = document.querySelectorAll('.skill-box');

  skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.05)';
      box.style.transition = 'transform 0.3s ease';
    });

    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
    });
  });
});
// Add skill-specific icons to skill boxes (updated with better strategy icon 🎯)
document.addEventListener("DOMContentLoaded", function() {
  const skillBoxes = document.querySelectorAll('.skill-box');

  skillBoxes.forEach((box) => {
    const skillText = box.innerText.toLowerCase();
    const icon = document.createElement('div');
    icon.style.fontSize = '2.5rem';
    icon.style.marginBottom = '10px';
    icon.style.transition = 'transform 0.5s ease';
    icon.style.textAlign = 'center';

    if (skillText.includes('strategy')) {
      icon.textContent = '🎯'; // 🎯 Target (new!)
    } else if (skillText.includes('Saviynt') || skillText.includes('expertise')) {
      icon.textContent = '⚙️'; // Gears/Integration
    } else if (skillText.includes('governance') || skillText.includes('governance')) {
      icon.textContent = '🛡️'; // Shield/Security
    } else if (skillText.includes('power platform') || skillText.includes('power platform')) {
      icon.textContent = '🛠️'; // Development Tools
    } else if (skillText.includes('sql') || skillText.includes('data')) {
      icon.textContent = '📊'; // Data Chart
    } else if (skillText.includes('agile') || skillText.includes('delivery')) {
      icon.textContent = '🏃‍♂️'; // Agile Speed
    } else {
      icon.textContent = '🚀'; // Default
    }

    box.insertBefore(icon, box.firstChild);

    // Animate icon on hover
    box.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.3) rotate(10deg)';
    });
    box.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});
// Certifications zoom pop on hover
document.addEventListener("DOMContentLoaded", function() {
  const certBadges = document.querySelectorAll('.cert-badge');

  certBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.transform = 'scale(1.1)';
      badge.style.transition = 'transform 0.3s ease';
    });

    badge.addEventListener('mouseleave', () => {
      badge.style.transform = 'scale(1)';
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector('.logo');

  if (logo) {
    // 1. Pulse on page load
    logo.style.transform = 'scale(0.8)';
    logo.style.opacity = '0';
    logo.style.transition = 'transform 1s ease, opacity 1s ease';

    setTimeout(() => {
      logo.style.transform = 'scale(1)';
      logo.style.opacity = '1';
    }, 300);

    // 2. Glow on hover
    logo.addEventListener('mouseenter', () => {
      logo.style.filter = 'drop-shadow(0 0 8px #0077cc)';
      logo.style.transition = 'filter 0.3s ease';
    });
    logo.addEventListener('mouseleave', () => {
      logo.style.filter = 'none';
    });

    // 3. Slow rotation on scroll
    window.addEventListener('scroll', () => {
      const rotation = window.scrollY / 20; // small rotation
      logo.style.transform = `scale(1) rotate(${rotation}deg)`;
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('#contact h1');
  if (!heading) return;

  let originalText = heading.textContent;
  heading.textContent = '';
  let i = 0;

  function typeLetter() {
    if (i < originalText.length) {
      heading.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeLetter, 50); // typing speed
    }
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      typeLetter();
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(heading);
});
document.addEventListener('DOMContentLoaded', function() {
  const shield = document.getElementById('shield-progress');
  const percentage = document.getElementById('shield-percentage');

  function updateShieldProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = Math.min((scrollTop / docHeight) * 100, 100);
    percentage.textContent = Math.round(scrolled) + "%";

    if (scrolled < 5) {
      shield.classList.add('hide');
    } else {
      shield.classList.remove('hide');
    }
  }

  window.addEventListener('scroll', updateShieldProgress);
  updateShieldProgress(); // initialize
});
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 8px #0077cc, 0 0 12px #0077cc';
    });

    link.addEventListener('mouseleave', () => {
      link.style.textShadow = 'none';
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const ctaButtons = document.querySelectorAll('.btn-primary');

  ctaButtons.forEach(button => {
    button.classList.add('pulse');
  });
});

