/**
 * MUZZAYAN TENSILE — SHARED INTERACTIVE CORE ENGINE
 * Sticky nav, Mobile Drawer, Quick View Modal, Dynamic Toast, Filter
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. Mobile Drawer Navigation
  const hamburger = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.backdrop-overlay');

  function openMobileMenu() {
    if (mobileNav && backdrop) {
      mobileNav.classList.add('open');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNav && backdrop) {
      mobileNav.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (hamburger) hamburger.addEventListener('click', openMobileMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

  // 3. Quick View Modal Engine
  const modal = document.getElementById('specModal');
  const modalClose = document.querySelector('.modal-close-trigger');
  
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
});

// Global Function to Open Specification Modal
function openQuickView(title, membrane, span, wind, desc, img) {
  const modal = document.getElementById('specModal');
  if (!modal) return;

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalMembrane').innerText = membrane;
  document.getElementById('modalSpan').innerText = span;
  document.getElementById('modalWind').innerText = wind;
  document.getElementById('modalDesc').innerText = desc;
  const modalImg = document.getElementById('modalImg');
  if (modalImg && img) modalImg.src = img;

  modal.classList.add('open');
}

// Global Toast Notification for Forms
function showNotification(msg) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#131B2E';
  toast.style.color = '#F3F4F6';
  toast.style.border = '1px solid #38BDF8';
  toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(56,189,248,0.3)';
  toast.style.padding = '14px 28px';
  toast.style.borderRadius = '50px';
  toast.style.zIndex = '9999';
  toast.style.fontWeight = '600';
  toast.style.fontSize = '0.95rem';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #38BDF8; font-size: 1.1rem;"></i> ${msg}`;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease';
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
