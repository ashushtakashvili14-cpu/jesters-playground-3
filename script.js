const nav = document.getElementById('nav');
const checkbox = document.getElementById('checkbox');

// Open/close the mobile menu when the hamburger is clicked
checkbox.addEventListener('change', () => {
  nav.classList.toggle('openNav', checkbox.checked);
});

// Close the menu when a link is clicked
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
    nav.classList.remove('openNav');
  });
});
