const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click' , function() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
});

// SCROLL

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('i a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navLinks
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('i a [href*=' + id + ']').classList.add('active');
            });
        }
})};

window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('section');
    
    for (var i = 0; i < fadeInElements.length; i++) {
      var element = fadeInElements[i];
      var elementTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight) {
        element.classList.add('fade-in-show');
      }
    }
  });