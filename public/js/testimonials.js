document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quote').innerHTML = testimonials[currentIndex].quote;
  document.getElementById('customer-name').innerHTML = testimonials[currentIndex].name;

  function switchTestimonial(index) {
    hideTestimonial();
    setTestimonial(index);
    showTestimonial();
  }

  function goToTestimonial(index) {
    if (index === currentIndex) { return; }
    switchTestimonial(index);
  }

  function goToNextTestimonial() {
    var nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    switchTestimonial(nextIndex);
  }

  function goToPreviousTestimonial() {
    var prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    switchTestimonial(prevIndex);
  }

  function hideTestimonial() {
    var element = document.getElementById('testimonial')
    element.style.visibility = 'hidden';
    element.style.opacity = 0;
  }

  function showTestimonial() {
    setTimeout(function() {
      var element = document.getElementById('testimonial')
      element.style.visibility = 'visible';
      element.style.opacity = 100;
    }, 500);
  }

  function setTestimonial(index) {
    document.getElementById("goToTestimonial" + (currentIndex + 1)).classList.remove('fa-circle')
    document.getElementById("goToTestimonial" + (currentIndex + 1)).classList.add('fa-circle-o')

    var quote = document.getElementById('quote');
    quote.innerHTML = testimonials[index].quote;
    document.getElementById('customer-name').innerHTML = testimonials[index].name;

    document.getElementById("goToTestimonial" + (index + 1)).classList.remove('fa-circle-o')
    document.getElementById("goToTestimonial" + (index + 1)).classList.add('fa-circle')

    currentIndex = index;
  }

  function toggleTestimonial(index) {
    if (expanded) {
      collapseTestimonial(index);
      expanded = false;
    } else {
      expandTestimonial(index);
      expanded = true;
    }
  }

  function expandTestimonial(index) {
    document.getElementById('quote').innerHTML = testimonials[index].quoteFull;
  }

  function collapseTestimonial(index) {
    document.getElementById('quote').innerHTML = testimonials[index].quote;
  }

  document.getElementById('testimonial-next').addEventListener('click', function() {
    goToNextTestimonial();
  });
  document.getElementById('testimonial-prev').addEventListener('click', function() {
    goToPreviousTestimonial();
  });
  document.getElementById('goToTestimonial1').addEventListener('click', function() {
    goToTestimonial(0);
  });
  document.getElementById('goToTestimonial2').addEventListener('click', function() {
    goToTestimonial(1);
  });
  document.getElementById('goToTestimonial3').addEventListener('click', function() {
    goToTestimonial(2);
  });
  document.getElementById('quote').addEventListener('click', function() {
    toggleTestimonial(currentIndex);
  });
});

var currentIndex = 0;
var expanded = false;
var testimonials = [
  {
    quote: 'Ed took the time to patiently and professionally cover every surface of the deck . . . I highly recommend his expertise as a skilled and conscientious craftsman . . .',
    quoteFull: "I hired Ed Neerhof (County Craftsman) to refresh the deck at the back of our residence. The years had eliminated the water repellency leaving irritating slivers and discolour. Ed took the time to patiently and professionally cover every surface of the deck. It now gleams in the sunshine and causes water to bead when it rains. He had previously constructed a rail fence for us at the front of our property. I highly recommend his expertise as a skilled and conscientious craftsman.",
    name: "-- Kent Kirkland, Trenton"
  },
  {
    quote: "He painted the interior and exterior, did both major jobs and minor tasks, all quickly and to high standards . . . I can't say enough good things about the quality of Ed's work.",
    quoteFull: "When I was preparing my house for sale, Ed did a wide variety of repairs and upgrades. He painted the interior and exterior, did both major jobs and minor tasks, all quickly and to high standards. I was especially pleased at how clean he left everything and the price was right. I can't say enough good things about the quality of Ed's work.",
    name: "-- E.W., Belleville"
  },
  {
    quote: ". . . Ed helped us turn an unappealing, cold, slap-together bedroom into a warm, welcoming wooden haven . . . We are sure anyone who gets a job done by Ed will be extremely satisfied. We always are!",
    quoteFull: "We live in an old red brick farmhouse that needs a professional touch when renovations or maintenance is required. Because of our past experience with Ed Neerhof, we naturally turn to him first when contemplating additional work. Several years ago Ed helped us turn an unappealing, cold, slap-together bedroom into a warm, welcoming wooden haven. Ed's care and craftsmanship were outstanding: it was a source of pride and pleasure to show the new room tovisitors. And our son has made the bedroom his home. Recently Ed did several maintenance jobs in and around the house. As always, his work was meticulous. Again, it pleased us to show others his work. He fits together old with new in seamless tradition. For further jobs, we will look to Ed again. His professional, exemplary work is a testament to his character. We are sure anyone who gets a job done by Ed will be extremely satisfied. We always are!",
    name: "-- Herman and Marianne Prinzen, Prince Edward County",
  }
];
