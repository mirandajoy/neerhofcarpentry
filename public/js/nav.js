document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('mobile-nav').classList.toggle('show');
    document.querySelector('#hamburger-menu i').classList.toggle('fa-bars');
    document.querySelector('#hamburger-menu i').classList.toggle('fa-times');
  });

  document.querySelectorAll('#mobile-nav a').forEach(function(element) {
    element.addEventListener('click', function() {
      document.getElementById('mobile-nav').classList.toggle('show');
      document.querySelector('#hamburger-menu i').classList.toggle('fa-bars');
      document.querySelector('#hamburger-menu i').classList.toggle('fa-times');
    });
  });

  window.addEventListener('hashchange', function() {
    var hash = window.location.hash;

		var target = document.getElementById( hash.slice(1) );
		window.scrollBy(0, -60);
  });

  document.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.getElementById('nav').classList.add('scrolled');
    } else {
      document.getElementById('nav').classList.remove('scrolled');
    }
  });
});
