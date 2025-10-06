// Mobile nav toggle and basic form validation
(function () {
  const toggle = document.querySelector('#mobileToggle');
  const nav = document.querySelector('#primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Simple client-side validation for contact/give forms
  function addRequiredValidation(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[data-required]');
      let hasError = false;
      required.forEach((el) => {
        const value = (el.value || '').toString().trim();
        if (!value) {
          hasError = true;
          el.setAttribute('aria-invalid', 'true');
          el.style.borderColor = '#e11d48';
        } else {
          el.removeAttribute('aria-invalid');
          el.style.borderColor = '#e4e7ec';
        }
      });
      if (hasError) {
        e.preventDefault();
        alert('Please fill in the required fields.');
      }
    });
  }

  addRequiredValidation('#contactForm');
  addRequiredValidation('#giveForm');
})();
