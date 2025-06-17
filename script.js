/* ============================================================
   Arte & Couro – script.js
   ============================================================ */

/* ---------- Estilo dinâmico para o Hero -------------------- */

const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});


(() => {
  const style = document.createElement('style');
  style.textContent = `
    .hero-carousel {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      z-index: 0;
    }
    .hero-slide.active {
      opacity: 1;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
})();

/* ---------- Utilitário de acessibilidade ------------------- */
const a11yClick = (el, fn) => {
  el.addEventListener('click', fn);
  el.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  });
};

/* ============================================================
   DOM carregado
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  initHeroCarousel();
  renderGallery();          // Inicializa com todos os produtos
  initFilterControls();
  initSmoothScroll();
});

/* ---------- Menu Hamburguer -------------------------------- */
function setupMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    a11yClick(hamburger, () => navLinks.classList.toggle('active'));
  }
}

/* ---------- Hero Carousel ---------------------------------- */
function initHeroCarousel() {
  const slides = [...document.querySelectorAll('.hero-slide')];
  if (!slides.length) return;

  const prevBtn = document.querySelector('.hero-btn.prev');
  const nextBtn = document.querySelector('.hero-btn.next');
  const carousel = document.querySelector('.hero-carousel');
  let index = 0;
  let timer;

  const showSlide = i => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i);
    });
  };

  const nextSlide = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  };

  const prevSlide = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  };

  const startAutoSlide = () => {
    timer = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(timer);
  };

  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);
  carousel?.addEventListener('mouseenter', stopAutoSlide);
  carousel?.addEventListener('mouseleave', startAutoSlide);

  showSlide(index);
  startAutoSlide();
}

/* ============================================================
   Galeria de Produtos
   ============================================================ */

const products = [
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco1.png','img/brinco1-1.png','img/brinco1-2.png','img/brinco1-3.png','img/brinco1-4.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco2.png','img/brinco2-1.png','img/brinco2-2.png','img/brinco2-3.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco6-1.png','img/brinco6.png','img/brinco6-2.png','img/brinco6-3.png','img/brinco6-4.png','img/brinco6-5.png','img/brinco6-6.png','img/brinco6-7.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco8-1.png','img/brinco8.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco11-1.png','img/brinco11-2.png','img/brinco11.png','img/brinco11-3.png','img/brinco11-4.png','img/brinco11-5.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco15-1.png','img/brinco15.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco16-0.png','img/brinco16-4.png','img/brinco16-5.png','img/brinco16-6.png','img/brinco16-7.png','img/brinco16-8.png','img/brinco16.png','img/brinco16-2.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco17-1.png','img/brinco17-2.png','img/brinco17-3.png','img/brinco17.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco18.png','img/brinco18-1.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco19.png','img/brinco19-1.png','img/brinco19-2.png','img/brinco19-3.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco20.png','img/brinco20-1.png','img/brinco20-2.png','img/brinco20-3.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco22.png','img/brinco22-1.png','img/brinco22-2.png','img/brinco22-3.png','img/brinco22-4.png','img/brinco22-5.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco23.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco24.png','img/brinco25.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco27.png','img/brinco27-1.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco30-2.png','img/brinco30-3.png','img/brinco30.png','img/brinco30-4.png','img/brinco30-1.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco32.png','img/brinco32-1.png','img/brinco32-2.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco31.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco33-5.png','img/brinco33.png','img/brinco33-1.png','img/brinco33-2.png','img/brinco33-3.png','img/brinco33-4.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco34.png','img/brinco34-1.png','img/brinco34-2.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco35.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco36.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco37-3.png','img/brinco37-4.png','img/brinco37.png','img/brinco37-6.png','img/brinco37-1.png','img/brinco37-2.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco38.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco39-1.png','img/brinco39.png'],
    desc: ''
  },
  {
    name: '',
    category: 'brincos',
    imgs: ['img/brinco40-1.png','img/brinco40.png'],
    desc: ''
  },
  
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar&brinco.png','img/colar&brinco1.png'],
    desc: ''
  },
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar&brinco2.png'],
    desc: ''
  },
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar&brinco3.png'],
    desc: ''
  },
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar&brinco4.PNG'],
    desc: ''
  },
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar1-1.PNG','img/colar1.PNG'],
    desc: ''
  },
  {
    name: '',
    category: 'colares',
    imgs: ['img/colar2.png'],
    desc: ''
  }
];

/* ---------- Renderizar Galeria ----------------------------- */
function renderGallery(filter = '') {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  gallery.innerHTML = ''; // limpa

  products
    .filter(p => !filter || p.category === filter)
    .forEach((p, idx) => {
      const imgs = p.imgs.map((src, i) => `
        <img src="${src}" alt="${p.name} ${i + 1}" class="slide${i === 0 ? ' active' : ''}">
      `).join('');

      gallery.insertAdjacentHTML('beforeend', `
        <div class="card">
          <div class="carousel" data-idx="${idx}">
            <button class="carousel-btn prev" aria-label="Imagem anterior">‹</button>
            <div class="slides-wrapper">${imgs}</div>
            <button class="carousel-btn next" aria-label="Próxima imagem">›</button>
          </div>
          <div class="card-content">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
          </div>
        </div>
      `);
    });

  initCarousels();
  observeCards();
}

/* ---------- Carrossel interno por card --------------------- */
function initCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    if (carousel.dataset.init) return;
    carousel.dataset.init = 'true';

    const slides = carousel.querySelectorAll('.slide');
    let current = 0;

    const update = () => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === current);
      });
    };

    const next = () => {
      current = (current + 1) % slides.length;
      update();
    };

    const prev = () => {
      current = (current - 1 + slides.length) % slides.length;
      update();
    };

    carousel.querySelector('.next')?.addEventListener('click', next);
    carousel.querySelector('.prev')?.addEventListener('click', prev);

    // Swipe touch (mobile)
    let startX = 0;
    let distX = 0;

    carousel.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', e => {
      distX = e.touches[0].clientX - startX;
    });

    carousel.addEventListener('touchend', () => {
      if (Math.abs(distX) > 40) (distX < 0 ? next : prev)();
      startX = distX = 0;
    });
  });
}

/* ---------- Animação ao aparecer --------------------------- */
function observeCards() {
  const cards = document.querySelectorAll('.card:not(.visible)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}

/* ---------- Filtro de categorias --------------------------- */
function initFilterControls() {
  document.querySelectorAll('.filter-controls button')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-controls .active')?.classList.remove('active');
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
      });
    });
}

/* ---------- Scroll suave para seções ------------------------ */
function initSmoothScroll() {
  const navLinks = document.querySelector('.nav-links');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks?.classList.remove('active');
      }
    });
  });
}
