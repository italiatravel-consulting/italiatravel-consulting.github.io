
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);

const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  
  function toggleLegal() {
    const content = document.getElementById("legal-content");
    content.style.display = (content.style.display === "block") ? "none" : "block";
  }

document.getElementById('visaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const destination = document.getElementById('destination').value;
    const typeVisa = document.getElementById('typeVisa').value;
    const whatsapp = document.getElementById('whatsapp').value;

    const message = `Bonjour, je souhaite faire une demande de visa.\n\nNom: ${nom}\nDestination: ${destination}\nType de visa: ${typeVisa}\nContact WhatsApp: ${whatsapp}`;
    const url = `https://wa.me/237656140453?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });