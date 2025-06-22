const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Active link toggle
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    navLinks.classList.remove('open'); // auto-close on click (mobile)
  });
});