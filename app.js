document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link-button');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease';
    });
  });
});
