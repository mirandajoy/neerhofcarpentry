document.addEventListener('DOMContentLoaded', function() {
  var currentTestimonial = 1;
  var timeout;
  resetTimeout();

  function goToNextTestimonial() {
    debugger
    document.getElementById('testimonial-' + currentTestimonial).style.display = 'none';
    document.getElementById('testimonial-' + currentTestimonial + 1).style.display = 'block';
    currentTestimonial++;
  }

  function goToPreviousTestimonial() {
    document.getElementById('testimonial-' + currentTestimonial).style.display = 'none';
    document.getElementById('testimonial-' + currentTestimonial - 1).style.display = 'block';
    currentTestimonial--;
    timeout = setTimeout
  }

  function resetTimeout() {
    timeout = setTimeout(goToNextTestimonial, 20000);
  }

  document.getElementById('testimonial-next').addEventListener('click', function() {
    goToNextTestimonial();
    resetTimeout();
  });
  document.getElementById('testimonial-prev').addEventListener('click', function() {
    goToPreviousTestimonial();
    resetTimeout();
  });
});
