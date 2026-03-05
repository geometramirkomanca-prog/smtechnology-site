// Language switcher dropdown
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', function() {
    langDropdown.classList.remove('open');
  });

  langDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}
