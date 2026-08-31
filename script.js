// Close mobile nav when a link is clicked
document.querySelectorAll('.main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.main-nav').classList.remove('open');
  });
});
