/**
 * KOPI HALU - OFFICIAL INTERACTION SCRIPT
 * UMKM Minuman Kopi Botolan
 * Built with Vanilla JavaScript (ES6+)
 */

// ==========================================================================
// 1. CONFIGURATION (DAPAT DIUBAH DENGAN MUDAH)
// ==========================================================================
const KOPI_HALU_CONFIG = {
  // Ganti dengan nomor WhatsApp UMKM Kopi Halu (Gunakan format 62 tanpa + atau spasi)
  whatsappNumber: "6288976805410",
  
  // Informasi brand & media sosial
  brandName: "KOPI HALU",
  tagline: "Satu Botol, Banyak Cerita.",
  instagramUsername: "kopihalu20",
  mapsUrl: "https://maps.app.goo.gl/3QYKChvKbavzUDgu9"
};

// ==========================================================================
// 2. PRODUCT DATA (SESUAI DAFTAR MENU ASLI KOPI HALU)
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: "kopi-halu",
    name: "Kopi Halu (Signature Aren)",
    category: "kopi-susu",
    tag: "Best Seller",
    price: 15000,
    priceFormatted: "Rp 15.000",
    volume: "250 ml",
    image: "images/product1.jpg",
    desc: "Signature bottled coffee kami. Perpaduan espresso mantap, susu creamy pilihan, dan manis legit gula aren asli yang pas di lidah.",
    tastingNotes: ["Creamy", "Sweet Aren", "Bold Espresso"],
    ingredients: "Espresso House Blend, Fresh Milk, Gula Aren Alami, Air Mineral"
  },
  {
    id: "kopi-pandan",
    name: "Kopi Halu Pandan",
    category: "kopi-susu",
    tag: "Favorit Pelanggan",
    price: 17000,
    priceFormatted: "Rp 17.000",
    volume: "250 ml",
    image: "images/product2.jpg",
    desc: "Perpaduan kopi creamy dan keharuman alami daun pandan yang lembut. Manisnya bikin halu, kopinya bikin jatuh cinta!",
    tastingNotes: ["Floral Pandan", "Smooth Milk", "Sweet Balance"],
    ingredients: "Espresso, Susu Creamy, Ekstrak Pandan Asli, Gula Alami"
  },
  {
    id: "kopi-hazelnut",
    name: "Kopi Hazelnut",
    category: "kopi-susu",
    tag: "Signature Nutty",
    price: 17000,
    priceFormatted: "Rp 17.000",
    volume: "250 ml",
    image: "images/product3.jpg",
    desc: "Kopi susu dengan aroma hazelnut panggang yang gurih, harum nutty yang elegan, dan tekstur lembut yang memanjakan lidah.",
    tastingNotes: ["Roasted Nutty", "Hazelnut Aroma", "Velvety"],
    ingredients: "Espresso, Susu Berkualitas, Hazelnut Flavoring, Gula Tebu"
  },
  {
    id: "kopi-americano",
    name: "Kopi Americano",
    category: "kopi-hitam",
    tag: "Hitam Segar",
    price: 13000,
    priceFormatted: "Rp 13.000",
    volume: "250 ml",
    image: "images/product4.jpg",
    desc: "Nikmat hitam pekat. Americano segar dibuat dari biji kopi pilihan untuk hari lebih semangat! Pahit mantap, segar dingin menyegarkan.",
    tastingNotes: ["Dark Cocoa", "Clean Finish", "Energizing"],
    ingredients: "Double Shot Espresso Murni, Air Mineral Pilihan"
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "non-kopi",
    tag: "Non Kopi Favorit",
    price: 17000,
    priceFormatted: "Rp 17.000",
    volume: "250 ml",
    image: "images/product5.jpg",
    desc: "Varian non-kopi spesial. Lembutnya matcha premium berpadu susu creamy berkualitas. Lebih nikmat dingin, bikin mood langsung naik!",
    tastingNotes: ["Authentic Matcha", "Rich Milk", "Mood Booster"],
    ingredients: "Pure Green Tea Matcha Powder, Fresh Milk, Gula Halus"
  },
  {
    id: "kopi-halu-extra",
    name: "Kopi Halu Extra Shot",
    category: "kopi-susu",
    tag: "Double Boost",
    price: 18000,
    priceFormatted: "Rp 18.000",
    volume: "250 ml",
    desc: "Kopi Halu Signature ditambah 1 shot espresso murni (+Extra Shoot Rp 3.000). Karakter rasa kopi lebih intens dan nendang untuk teman begadang.",
    image: "images/product6.jpg",
    tastingNotes: ["Extra Strong", "Rich Cream", "High Focus"],
    ingredients: "Extra Shot Espresso (+3k), Susu Creamy, Gula Aren Asli"
  }
];

// ==========================================================================
// 3. CORE DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initProductFilter();
  initProductModals();
  initLightbox();
  initAboutTabs();
  initOrderForm();
  initScrollReveal();
  initBackToTop();
});

// ==========================================================================
// 4. NAVBAR & SCROLL BEHAVIOR
// ==========================================================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ==========================================================================
// 5. MOBILE DRAWER NAVIGATION
// ==========================================================================
function initMobileMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  if (!hamburgerBtn || !mobileDrawer || !mobileBackdrop) return;

  const toggleMenu = () => {
    const isOpen = hamburgerBtn.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    hamburgerBtn.classList.add('active');
    mobileDrawer.classList.add('active');
    mobileBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburgerBtn.classList.remove('active');
    mobileDrawer.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileBackdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ==========================================================================
// 6. SCROLLSPY (ACTIVE NAVIGATION HIGHLIGHT)
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

        mobileNavLinks.forEach(mLink => {
          mLink.classList.remove('active');
          if (mLink.getAttribute('href') === `#${id}`) {
            mLink.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ==========================================================================
// 7. PRODUCT CATEGORY FILTER
// ==========================================================================
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 8. PRODUCT DETAIL MODAL
// ==========================================================================
function initProductModals() {
  const modalOverlay = document.getElementById('product-modal');
  const modalContent = document.getElementById('product-modal-content');
  const closeBtn = document.getElementById('close-product-modal');
  const detailBtns = document.querySelectorAll('.btn-detail');

  if (!modalOverlay || !modalContent) return;

  const openModal = (productId) => {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    const waText = encodeURIComponent(`Halo Kopi Halu, saya ingin memesan ${prod.name} (${prod.priceFormatted}). Apakah stok tersedia?`);
    const waUrl = `https://wa.me/${KOPI_HALU_CONFIG.whatsappNumber}?text=${waText}`;

    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
        <div style="border-radius: var(--radius-lg); overflow: hidden; background: var(--color-cream); text-align: center; max-height: 320px;">
          <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-accent); text-transform: uppercase;">
              ${prod.tag} • ${prod.volume}
            </span>
            <span style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-primary-dark);">
              ${prod.priceFormatted}
            </span>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 12px;">
            ${prod.name}
          </h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 18px;">
            ${prod.desc}
          </p>

          <div style="margin-bottom: 18px;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 8px;">
              Tasting Notes:
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${prod.tastingNotes.map(note => `<span class="note-pill" style="background: var(--color-accent-light); color: var(--color-primary); font-weight: 600;">✨ ${note}</span>`).join('')}
            </div>
          </div>

          <div style="margin-bottom: 24px; padding: 12px 16px; background-color: var(--color-bg-base); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">Komposisi Bahan:</div>
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">${prod.ingredients}</div>
          </div>

          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
            <i class="fa-brands fa-whatsapp"></i> Pesan Varian Ini via WhatsApp
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-product-id');
      openModal(pId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================================================
// 9. LIGHTBOX MODAL (MENU BOARD & GALLERY)
// ==========================================================================
function initLightbox() {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeLightbox = document.getElementById('close-lightbox');
  const triggerElements = document.querySelectorAll('[data-lightbox]');

  if (!lightboxModal || !lightboxImg) return;

  const openLightbox = (src, caption) => {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  };

  triggerElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const src = el.getAttribute('data-lightbox-src') || el.querySelector('img')?.src;
      const caption = el.getAttribute('data-lightbox-caption') || el.querySelector('img')?.alt;
      if (src) openLightbox(src, caption);
    });
  });

  if (closeLightbox) closeLightbox.addEventListener('click', close);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      close();
    }
  });
}

// ==========================================================================
// 10. ABOUT US TABS (VISI, MISI, FILOSOFI)
// ==========================================================================
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabBtns.length || !tabPanes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// ==========================================================================
// 11. DIRECT WHATSAPP ORDER FORM
// ==========================================================================
function initOrderForm() {
  const orderForm = document.getElementById('whatsapp-order-form');
  if (!orderForm) return;

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('order-name')?.value.trim();
    const phone = document.getElementById('order-phone')?.value.trim();
    const variant = document.getElementById('order-variant')?.value;
    const qty = document.getElementById('order-qty')?.value || '1';
    const notes = document.getElementById('order-notes')?.value.trim();

    if (!name || !variant) {
      alert('Silakan masukkan nama dan pilih varian kopi terlebih dahulu.');
      return;
    }

    // Build polite WhatsApp message
    let message = `Halo ${KOPI_HALU_CONFIG.brandName},\n`;
    message += `Saya ingin memesan kopi botolan dengan rincian berikut:\n\n`;
    message += `👤 *Nama:* ${name}\n`;
    if (phone) message += `📞 *Kontak:* ${phone}\n`;
    message += `☕ *Menu / Varian:* ${variant}\n`;
    message += `📦 *Jumlah:* ${qty} botol\n`;
    if (notes) message += `📝 *Catatan Tambahan:* ${notes}\n\n`;
    message += `Mohon konfirmasi ketersediaan dan total harga serta pembayarannya. Terima kasih! ✨`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${KOPI_HALU_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

// ==========================================================================
// 12. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// 13. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.querySelector('.btn-back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

