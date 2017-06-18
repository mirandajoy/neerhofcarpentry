document.addEventListener('DOMContentLoaded', function() {
  var currentTestimonial = 1;

  setTimeout(function() {
    document.getElementById('testimonial-' + currentTestimonial).style.display = 'none';
    document.getElementById('testimonial-' + currentTestimonial + 1).style.display = 'block';
    currentTestimonial++;
  }, 20000);
});
